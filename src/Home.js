import React from 'react'
import Dashboard from './Dashboard'

function Home() {
    return (
        <div>
          

       
    

            {/* <!-- main content start --> */}
            <div class="main-content">
                <div class="dashboard-breadcrumb mb-30">
                    <h2>Dashboard</h2>
                    <div class="input-group dashboard-filter">
                        <input type="text" class="form-control" name="basic" id="dashboardFilter" readonly />
                        <label for="dashboardFilter" class="input-group-text"><i class="fa-light fa-calendar-days"></i></label>
                    </div>
                </div>
                <div class="row mb-30">
                    <div class="col-lg-3 col-6 col-xs-12">
                        <div class="dashboard-top-box rounded-bottom panel-bg">
                            <div class="left">
                                <h3>OPD</h3>
                                <p>OPD</p>
                                <a href="#">View</a>
                            </div>
                            <div class="right">
                                <span class="text-primary">+16.24%</span>
                                <div class="part-icon rounded">
                                    <span><i class="fa-light fa-dollar-sign"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 col-xs-12">
                        <div class="dashboard-top-box rounded-bottom panel-bg">
                            <div class="left">
                                <h3>LIS</h3>
                                <p>LIS</p>
                                <a href="#">Lis</a>
                            </div>
                            <div class="right">
                                <span class="text-primary">+16.24%</span>
                                <div class="part-icon rounded">
                                    <span><i class="fa-light fa-bag-shopping"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 col-xs-12">
                        <div class="dashboard-top-box rounded-bottom panel-bg">
                            <div class="left">
                                <h3>Patient</h3>
                                <p>New registration</p>
                                <a href="#">See details</a>
                            </div>
                            <div class="right">
                                <span class="text-primary">+16.24%</span>
                                <div class="part-icon rounded">
                                    <span><i class="fa-light fa-user"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 col-xs-12">
                        <div class="dashboard-top-box rounded-bottom panel-bg">
                            <div class="left">
                                <h3>Reports</h3>
                                <p>Search</p>
                                <a href="#">status</a>
                            </div>
                            <div class="right">
                                <span class="text-primary">+16.24%</span>
                                <div class="part-icon rounded">
                                    <span><i class="fa-light fa-credit-card"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-8">
                        <div class="panel chart-panel-1">
                            <div class="panel-header">
                                <h5>Patient Analytics</h5>
                                <div class="btn-box">
                                    <button class="btn btn-sm btn-outline-primary">Week</button>
                                    <button class="btn btn-sm btn-outline-primary">Month</button>
                                    <button class="btn btn-sm btn-outline-primary">Year</button>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div id="saleAnalytics" class="chart-dark"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-md-6">
                        <div class="panel">
                            <div class="panel-header">
                                <h5>Visitor</h5>
                                <div class="btn-box d-sm-block d-none">
                                    <button class="btn btn-sm btn-outline-primary">Week</button>
                                    <button class="btn btn-sm btn-outline-primary">Month</button>
                                    <button class="btn btn-sm btn-outline-primary">Year</button>
                                </div>
                            </div>
                            <div class="panel-body">
                                <table class="table table-borderless visitor-table">
                                    <thead>
                                        <tr>
                                            <th>Sources</th>
                                            <th>Visitor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span class="text-fb"><i class="fa-brands fa-facebook-f"></i></span> Facebook</td>
                                            <td>153,100</td>
                                        </tr>
                                        <tr>
                                            <td><span class="text-behance"><i class="fa-brands fa-behance"></i></span> Behance</td>
                                            <td>234,200</td>
                                        </tr>
                                        <tr>
                                            <td><span class="text-comb"><i class="fa-brands fa-y-combinator"></i></span> Combinator</td>
                                            <td>326,012</td>
                                        </tr>
                                        <tr>
                                            <td><span class="text-insta"><i class="fa-brands fa-instagram"></i></span> Instagram</td>
                                            <td>124,420</td>
                                        </tr>
                                        <tr>
                                            <td><span class="text-dribble"><i class="fa-brands fa-dribbble"></i></span> Dribble</td>
                                            <td>554,220</td>
                                        </tr>
                                        <tr>
                                            <td><span class="text-pinterest"><i class="fa-brands fa-pinterest-p"></i></span> Pinterest</td>
                                            <td>134,800</td>
                                        </tr>
                                        <tr>
                                            <td><span class="text-linkedin"><i class="fa-brands fa-linkedin-in"></i></span> Linkedin</td>
                                            <td>254,812</td>
                                        </tr>
                                        <tr>
                                            <td><span class="text-twitter"><i class="fa-brands fa-twitter"></i></span> Twitter</td>
                                            <td>124,250</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>



                    <div class="col-xxl-12">
                        <div class="panel">
                            <div class="panel-header">
                                <h5>Recent Discharge</h5>
                                <div id="tableSearch"></div>
                            </div>
                            <div class="panel-body">
                                <table class="table table-dashed recent-order-table" id="myTable">
                                    <thead>
                                        <tr>
                                            <th>Patient ID</th>
                                            <th>Name</th>
                                            <th>Admission Date</th>
                                            <th>Payment Method</th>
                                            <th>Discharge Date</th>
                                            <th>Total Amount</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>855212</td>
                                            <td>Soward</td>
                                            <td>28/10/22</td>
                                            <td>Cash</td>
                                            <td>02/11/22</td>
                                            <td>$05.22</td>
                                            <td><span class="badge bg-success">Paid</span></td>
                                            <td>
                                                <div class="btn-box">
                                                    <button><i class="fa-light fa-eye"></i></button>
                                                    <button><i class="fa-light fa-pen"></i></button>
                                                    <button><i class="fa-light fa-trash"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>855213</td>
                                            <td>Kian</td>
                                            <td>29/10/22</td>
                                            <td>Card</td>
                                            <td>03/11/22</td>
                                            <td>$17.00</td>
                                            <td><span class="badge bg-primary">Delivered</span></td>
                                            <td>
                                                <div class="btn-box">
                                                    <button><i class="fa-light fa-eye"></i></button>
                                                    <button><i class="fa-light fa-pen"></i></button>
                                                    <button><i class="fa-light fa-trash"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>855214</td>
                                            <td>Jennifer</td>
                                            <td>29/10/22</td>
                                            <td>Card</td>
                                            <td>03/11/22</td>
                                            <td>$15.22</td>
                                            <td><span class="badge bg-info">Pending</span></td>
                                            <td>
                                                <div class="btn-box">
                                                    <button><i class="fa-light fa-eye"></i></button>
                                                    <button><i class="fa-light fa-pen"></i></button>
                                                    <button><i class="fa-light fa-trash"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>855215</td>
                                            <td>Benjamin</td>
                                            <td>30/10/22</td>
                                            <td>Cash</td>
                                            <td>03/11/22</td>
                                            <td>$12.15</td>
                                            <td><span class="badge bg-secondary">Unpaid</span></td>
                                            <td>
                                                <div class="btn-box">
                                                    <button><i class="fa-light fa-eye"></i></button>
                                                    <button><i class="fa-light fa-pen"></i></button>
                                                    <button><i class="fa-light fa-trash"></i></button>
                                                </div>
                                            </td>
                                        </tr>



                                    </tbody>
                                </table>
                                <div class="table-bottom-control"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- footer start --> */}
                <div class="footer">
                    <p>Copyright© <script>document.write(new Date().getFullYear())</script> All Rights Reserved By <span class="text-primary">Ritesh Tagunde</span></p>
                </div>
                {/* <!-- footer end --> */}
            </div>
            {/* <!-- main content end --> */}

    </div >
  )
}

export default Home