import { useState } from 'react';
import { request } from '../../services/api';
import { FormRegistry } from '../../auth/components/FormRegistry';

export const RegistroPage = () => {
  return (
    <>
      <h2>Fomulario registro</h2>
      <FormRegistry />
    </>
  )
};

