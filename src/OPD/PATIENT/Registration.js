import React from 'react'
import Dashboard from '../../Dashboard'

function Registration() {
    return (
        <div>
            {/* search patient */}
            <div className="col-12">
                <div className="panel">
                    <div className="panel-header">
                        <h5>Patient</h5>
                    </div>
                    <div className="panel-body">
                        <div className="row g-3">
                            <div className="col-lg-12">

                                <div className="card mb-20">
                                    <div className="card-header">
                                        Search Patient
                                    </div>
                                    <div className="card-body">
                                        <form className="row gy-2 gx-2 align-items-center">
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">UHID</label>
                                                <input type="text" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">Patient Name</label>
                                                <input type="text" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">Mobile No.</label>
                                                <input type="text" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">DOB</label>
                                                <input type="date" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">Identification Type</label>
                                                <input type="text" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">Identification No.</label>
                                                <input type="text" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-auto pt-4">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>

                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    List
                                                </div>
                                                <div className="card-body">
                                                    <table className="table table-dashed table-hover digi-dataTable table-striped" id="componentDataTable2">
                                                        <thead>
                                                            <tr>
                                                                <th className="no-sort">
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" />
                                                                    </div>
                                                                </th>
                                                                <th>UHID</th>
                                                                <th>Patient Name</th>
                                                                <th>Mobile No.</th>
                                                                <th>DOB</th>
                                                                <th>Identification Type</th>
                                                                <th>Identification No.</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" />
                                                                    </div>
                                                                </td>
                                                                <td>UHID-001</td>
                                                                <td>Shaikh Abu Dardah</td>
                                                                <td>12345-12345</td>
                                                                <td>December 27, 2022</td>
                                                                <td>PAN CARD</td>
                                                                <td>ABCD3705A</td>

                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" />
                                                                    </div>
                                                                </td>
                                                                <td>UHID-002</td>
                                                                <td>Shaikh Abu Dardah</td>
                                                                <td>12345-12345</td>
                                                                <td>December 27, 2022</td>
                                                                <td>ADHAR CARD</td>
                                                                <td>1111-1111-1111</td>

                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* registration page */}
                <div className="panel">
                    <div className="panel-body">
                        <div className="row g-3">
                            <div className="col-lg-12">

                                <div className="card mb-20">
                                    <div className="card-header">
                                        Search Patient
                                    </div>
                                    <div className="card-body">
                                        <form className="row gy-2 gx-2 align-items-center">
                                            <div className="col-sm">
                                                <label for="basicInput" className="form-label">Prefix</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">Middle Name</label>
                                                <input type="text" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">DOB</label>
                                                <input type="date" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-sm">
                                                <label for="basicInput" className="form-label">Years(s)</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="" />
                                            </div>
                                            <div className="col-sm">
                                                <label for="basicInput" className="form-label">Months(s)</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="" />
                                            </div>
                                            <div className="col-sm">
                                                <label for="basicInput" className="form-label">Days(s)</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="" />
                                            </div>
                                        </form>
                                        <form className="row gy-2 gx-2 align-items-center pt-3">
                                            <div className="col-sm">
                                                <label for="basicInput" className="form-label">Gender</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">Mobile No.</label>
                                                <input type="text" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">Email</label>
                                                <input type="mail" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">Patient category</label>
                                                <input type="text" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>
                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">Marital Status</label>
                                                <input type="date" className="form-control" id="autoSizingInput" placeholder="" />
                                            </div>

                                            <div className="col-auto">
                                                <label for="basicInput" className="form-label">Identification No.</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="" />
                                            </div>
                                            <div className="col-sm">
                                                <label for="basicInput" className="form-label">Occupation</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="" />
                                            </div>
                                            <div className="col-sm">
                                                <label for="basicInput" className="form-label">VIP</label>
                                                <input className="form-check-input" type="checkbox" placeholder="" aria-label="" />
                                            </div>
                                        </form>
                                        <form className="row g-3 pt-3">
                                            <div className="col-6">
                                                <label for="inputAddress" className="form-label">Address</label>
                                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                            </div>
                                            <div className="col-md-2">
                                                <label for="inputCity" className="form-label">City</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="col-md-2">
                                                <label for="inputState" className="form-label">State</label>
                                                <select id="inputState" className="form-select">
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label for="inputZip" className="form-label">Zip</label>
                                                <input type="text" className="form-control" id="inputZip" />
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label className="form-check-label" for="gridCheck">
                                                        Same as local
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <label for="inputAddress2" className="form-label">Address 2</label>
                                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                            </div>
                                            <div className="col-md-2">
                                                <label for="inputCity" className="form-label">City</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="col-md-2">
                                                <label for="inputState" className="form-label">State</label>
                                                <select id="inputState" className="form-select">
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label for="inputZip" className="form-label">Zip</label>
                                                <input type="text" className="form-control" id="inputZip" />
                                            </div>
                                            <div className="add-thumbnail product-image-upload product-image-upload-2">
                                                <div className="part-txt">
                                                    <h5>Photo Upload</h5>
                                                </div>
                                                <input type="text" id="singleUpload" />
                                            </div>
                                            <div className="col-1 ">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                            <div className="col-3 ">
                                                <button type="submit" className="btn btn-primary">Clear</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>








    )
}

export default Registration