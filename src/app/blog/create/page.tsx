'use client';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  useToast
} from '@chakra-ui/react';
import chakraStyled from '@/src/utils/styles';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { User } from '@/src/types';
import * as yup from 'yup';
import { Formik, FormikHelpers } from 'formik';

const StyledLabel = chakraStyled(FormLabel)(() => ({
  fontSize: 18 / 16 + 'rem',
  fontWeight: 500,
  lineHeight: 24 / 18
}));

const schema = yup.object({
  title: yup.string().required('This field is required').max(100, 'Must be less than 100 characters'),
  author: yup.string().required('This field is required'),
  content: yup.string().required('This field is required').min(50, 'Must be at least 50 characters')
});

export default function CreateBlog() {
  const queryClient = useQueryClient();
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users');
      return (await resp.json()) as Promise<User[]>;
    }
  });

  const addPost = async (newData: { title: string; body: string; userId: string }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newData)
      // other fetch options
    });

    if (!response.ok) {
      throw new Error('Mutation failed');
    }

    await queryClient.invalidateQueries(['posts']);

    return response.json();
  };

  const { mutateAsync } = useMutation(addPost);

  const toast = useToast();

  const initialValues = { title: '', author: '1', content: '' };

  async function handleSubmit<Values extends typeof initialValues, Helpers extends FormikHelpers<Values>>(
    values: Values,
    actions: Helpers
  ) {
    try {
      actions.setSubmitting(true);

      const updatedData = await mutateAsync({
        userId: values.author,
        title: values.title,
        body: values.content
      });

      console.log(updatedData);

      actions.resetForm();
      toast({
        title: 'Blog posts was successfully created.',
        status: 'success'
      });
    } catch (error) {
      toast({
        title: 'Unexpected error occurred',
        status: 'error'
      });
      actions.setSubmitting(false);
    }
  }

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      {props => (
        <Box as='form' id='create-page-form' onSubmit={props.handleSubmit}>
          <Container maxW={1172} mx='auto'>
            <Box display='grid' gap={{ base: '20px', md: '42px' }}>
              <Heading fontSize={24 / 16 + 'rem'} fontWeight={600} lineHeight={32 / 24} mt='51px'>
                Creating new blog
              </Heading>
              <FormControl>
                <StyledLabel>Blog title</StyledLabel>
                <Input
                  placeholder='Introduction'
                  size='lg'
                  {...props.getFieldProps('title')}
                  isInvalid={!!props.errors.title && props.touched.title}
                  errorBorderColor='red.300'
                  isDisabled={props.isSubmitting}
                />
                {!!props.errors.title && props.touched.title && (
                  <FormHelperText color='red.300'>{props.errors.title}</FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <StyledLabel>Blog author</StyledLabel>
                <Select
                  size='lg'
                  {...props.getFieldProps('author')}
                  isInvalid={!!props.errors.author && props.touched.author}
                  errorBorderColor='red.300'
                  isDisabled={props.isSubmitting}
                >
                  {users?.map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </Select>
                {!!props.errors.author && props.touched.author && (
                  <FormHelperText color='red.300'>{props.errors.author}</FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <StyledLabel>Blog content</StyledLabel>
                <Textarea
                  rows={12}
                  resize='none'
                  {...props.getFieldProps('content')}
                  isInvalid={!!props.errors.content && props.touched.content}
                  errorBorderColor='red.300'
                  isDisabled={props.isSubmitting}
                />
                {!!props.errors.content && props.touched.content && (
                  <FormHelperText color='red.300'>{props.errors.content}</FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box
              mt={{ base: '32px', md: '92px' }}
              display='flex'
              gap='16px'
              justifyContent='space-between'
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Button w={{ base: '100%', md: '276px' }}>Cancel</Button>
              <Button
                w={{ base: '100%', md: '276px' }}
                variant='contained'
                type='submit'
                isDisabled={props.isSubmitting}
              >
                Publish
              </Button>
            </Box>
          </Container>
        </Box>
      )}
    </Formik>
  );
}
