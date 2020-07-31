import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

export default function CadastroVideo(){
    return (
        <PageDefault>
            <h1>Página de Cadastro de Vídeo</h1>

            <Link to="/cadastro/categoria">
                Cadastra Categoria
            </Link>
        </PageDefault>
    )
}