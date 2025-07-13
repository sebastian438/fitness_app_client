import { useState } from 'react';
import { request } from '../../services/api';
import { FormRegistry } from '../../auth/components/FormRegistry';

export const RegistroPage = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2 className="text-center mb-4">Formulario de Registro</h2>
          <FormRegistry />
        </div>
      </div>
    </div>
  );
};

