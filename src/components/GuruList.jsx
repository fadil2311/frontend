import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";

const GuruList = () => {
    const [employee, setEmployee] = useState([]);
    const {user} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getEmployee();
    }, []);

    const getEmployee = async () => {
        const response = await axios.get("http://localhost:5000/employee");
        setEmployee(response.data);
    };

    const deleteEmployee = async(employeeId) => {
        await axios.delete(`http://localhost:5000/employee/${employeeId}`);
        getEmployee();
    }

  return (
    <div>
        <h1 className='title'>Guru</h1>
        <h2 className='subtitle'>List of Guru</h2>
        <Link to="/employee/add" className='button is-primary mb-2'>
            Add New
        </Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>NIK</th>
                    <th>Nama Lengkap</th>
                    <th>Tempat Lahir</th>
                    <th>Tanggal Lahir</th>
                    <th>Jenis Kelamin</th>
                    <th>No Telepon</th>
                    <th>Foto</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
            {employee.map((employee, index) => (
                <tr key={employee.uuid}>
                    <td>{index + 1}</td>
                    <td>{employee.nik}</td>
                    <td>{employee.nama_lengkap}</td>
                    <td>{employee.tmptLahir}</td>
                    <td>{moment(employee.tglLahir).format('DD/MM/YYYY')}</td>
                    <td>{employee.jenis_kelamin}</td>
                    <td>{employee.noTlp}</td>
                    <td><img src={employee.foto} alt="" /></td>
                    <td>
                    <Link to={`/employee/edit/${employee.uuid}`}
                        className='button is-small is-info'>
                            Edit
                        </Link>
                        <button 
                        onClick={() => deleteEmployee(employee.uuid)}
                        className='button is-small is-danger'
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default GuruList