import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddEmployee = () => {
    const [nik, setNik] = useState("");
    const [namaLengkap, setNamaLengkap] = useState("");
    const [tempatLahit, setTempatLahir] = useState("");
    const [tanggalLahir, setTanggalLahir] = useState("");
    const [jenisKelamin,setJenisKelamin] = useState("");
    const [number,setNumber] = useState("");
    const [foto, setFoto] = useState(null)
    const [msg, setMsg] = useState(""); 
    const navigate = useNavigate();

    const saveEmployee = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/employees', {
                nik : nik,
                nama_lengkap : namaLengkap,
                tmptLahir : tempatLahit,
                tglLahir : tanggalLahir,
                jenis_kelamin : jenisKelamin,
                noTlp : number,
                foto : foto
            });
            navigate("/employees");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

  return (
    <div>
        <h1 className='title'>Pegawai</h1>
        <h2 className='subtitle'>Tambah Pegawai</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <form onSubmit={saveEmployee}>
                        <p className='has-text-centered'>{msg}</p>
                        <div className="field mt-5">
                                <label className='label'>NIK</label>
                                <div className="control">
                                    <input 
                                        type="number" 
                                        className="input" 
                                        placeholder='Masukkan NIK'
                                        value={nik}
                                        onChange={(e) => setNik(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label className='label'>Nama Lengkap</label>
                                <div className="control">
                                    <input 
                                        type="text" 
                                        className="input" 
                                        placeholder='Nam Lengkap'
                                        value={namaLengkap}
                                        onChange={(e) => setNamaLengkap(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className='label'>Tempat Lahir</label>
                                <div className="control">
                                    <input 
                                        type="text" 
                                        className="input" 
                                        placeholder='Tempat Lahir'
                                        value={tempatLahit}
                                        onChange={(e) => setTempatLahir(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className='label'>Tanggal Lahir</label>
                                <div className="control">
                                    <input 
                                        type="date" 
                                        value={tanggalLahir}
                                        onChange={(e) => setTanggalLahir(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Jenis Kelamin</label>
                                    <div className="field has-check is-horizontal">
                                            <div className="field-body">
                                                <div className="field">
                                                <div className="field is-grouped-multiline is-grouped">
                                                    <div className="control"><label className="b-radio radio">
                                                        <input 
                                                            type="radio" 
                                                            className="sample-radio" 
                                                            value="Laki-laki"
                                                            checked={jenisKelamin === "Laki-laki"}
                                                            onChange={(e) => setJenisKelamin(e.target.value)}
                                                        />
                                                    <span className="check"></span>
                                                    <span className="control-label"> Laki-laki</span>
                                                    </label></div>
                                                    <div className="control"><label className="b-radio radio">
                                                        <input 
                                                            type="radio" 
                                                            className="sample-radio" 
                                                            value="Perempuan"
                                                            checked={jenisKelamin === "Perempuan"}
                                                            onChange={(e) => setJenisKelamin(e.target.value)}
                                                        />
                                                    <span className="check"></span>
                                                    <span className="control-label"> Perempuan</span>
                                                    </label>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                    </div>
                                    
                            </div>
                            <div className="field">
                                <label className='label'>No Telepon</label>
                                <div className="control">
                                    <input 
                                        type="number" 
                                        className="input" 
                                        placeholder='No Telepon'
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className='label'>Foto</label>
                                    <div className="field-body">
                                        <div className="field">
                                            <div className="field file">
                                                <label className="upload control">
                                                <a className="button is-primary">
                                                    <span className="icon"><i className="mdi mdi-upload"></i></span>
                                                        <span>Pick a file</span>
                                                </a>
                                                    <input 
                                                        type="file" 
                                                        id="input-file"
                                                        onChange={(e) => setFoto(e.target.files[0])} 
                                                        // style={{opacity: 0}}
                                                        />
                                                </label>
                                            </div>
                                        </div>
                                    </div> 
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button type='submit' className='button is-success'>Simpan</button>    
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddEmployee