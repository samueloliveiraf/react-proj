import React, { useEffect, useState } from 'react';
import { fetchCompanies } from './Api';
import 'bootstrap/dist/css/bootstrap.min.css';

function CompanyList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchCompanies(currentPage, 25, 'name_company');
            setCompanies(result.companies);
            setTotalPages(result.total_pages);
        };
        fetchData();
    }, [currentPage]);

    return (
        <div className="container">
            <div className="table-responsive">
                <table className="table table-rounded">
                    <thead>
                        <tr>
                            <th>Nome da Empresa</th>
                            <th>Nome Fantasia</th>
                            <th>CNPJ</th>
                            <th>CNAE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company) => (
                            <tr key={company.cnpj}>
                                <td>{company.name_company}</td>
                                <td>{company.name_fantasy}</td>
                                <td>{company.cnpj}</td>
                                <td>{company.cnae}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination d-flex justify-content-center">
                <button className="btn btn-light"
                    onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span className="text-pagination">Página {currentPage} de {totalPages}</span>
                <button className="btn btn-light"
                    onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Próxima
                </button>
            </div>
        </div>
    );
}

export default CompanyList;