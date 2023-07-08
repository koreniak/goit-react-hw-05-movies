import { memo } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { MovieForm, Input, SubmitButton, Error } from './Searchbar.styled';

const validationSchema = object({
  query: string().required()
});

const Searchbar = ({ onSubmit, inputValue }) => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    onSubmit(values);
    setSubmitting(false);
    resetForm();
  };

  return <Formik
    initialValues={{ query: inputValue ? inputValue : "" }}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
  >
    {({ isSubmitting }) =>
      <MovieForm>
        <label htmlFor="query">
          <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </label>
        <SubmitButton type="submit" disabled={isSubmitting}>
          Search Movies
        </SubmitButton>
        <Error component="p" name="number" />
      </MovieForm>}
  </Formik>
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string
};

export default memo(Searchbar);