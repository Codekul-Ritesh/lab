import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Registration from './OPD/PATIENT/Registration'
import Home from './Home'

function Dashboard() {
    return (
        <div>

         

                {/* <!-- header start --> */}
                <div class="header">
                    <div class="row g-0 align-items-center">
                        <div class="col-xxl-6 col-xl-5 col-4 d-flex align-items-center gap-20">
                            <div class="main-logo d-lg-block d-none">
                                <div class="logo-big">
                                    <a href="/">
                                        <img style={{ height: '60px' }} src="dashboad/assets/images/AxonicLogo-.png" alt="Logo" />
                                    </a>
                                </div>
                                <div class="logo-small">
                                    <a href="/">
                                        <img src="dashboad/assets/images/AxonicLogo-.png" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                            <div class="nav-close-btn">
                                <button id="navClose"><i class="fa-light fa-bars-sort"></i></button>
                            </div>
                            <a href="https://axonichealth.com/" target="_blank" class="btn btn-sm btn-primary site-view-btn"><i class="fa-light fa-globe me-1"></i> <span>View Website</span></a>
                        </div>
                        <div class="col-4 d-lg-none">
                            <div class="mobile-logo">
                                <a href="/">
                                    <img src="dashboad/assets/images/AxonicLogo-.png" alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-7 col-lg-8 col-4">
                            <div class="header-right-btns d-flex justify-content-end align-items-center">
                                <div class="header-collapse-group">
                                    <div class="header-right-btns d-flex justify-content-end align-items-center p-0">
                                        <form class="header-form">
                                            <input type="search" name="search" placeholder="Search..." required />
                                            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                                        </form>
                                        <div class="header-right-btns d-flex justify-content-end align-items-center p-0">
                                            <div class="lang-select">
                                                <span>Language:</span>
                                                <select>
                                                    <option value="">EN</option>
                                                    <option value="">BN</option>
                                                    <option value="">FR</option>
                                                </select>
                                            </div>
                                            <div class="header-btn-box">
                                                <button class="header-btn" id="messageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fa-light fa-comment-dots"></i>
                                                    <span class="badge bg-danger">3</span>
                                                </button>
                                                <ul class="message-dropdown dropdown-menu" aria-labelledby="messageDropdown">
                                                    <li>
                                                        <a href="#" class="d-flex">
                                                            <div class="avatar">
                                                                <img src="dashboad/assets/images/avatar.png" alt="image" />
                                                            </div>
                                                            <div class="msg-txt">
                                                                <span class="name">Archer Cowie</span>
                                                                <span class="msg-short">There are many variations of passages of Lorem Ipsum.</span>
                                                                <span class="time">2 Hours ago</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="d-flex">
                                                            <div class="avatar">
                                                                <img src="dashboad/assets/images/avatar-2.png" alt="image" />
                                                            </div>
                                                            <div class="msg-txt">
                                                                <span class="name">Cody Rodway</span>
                                                                <span class="msg-short">There are many variations of passages of Lorem Ipsum.</span>
                                                                <span class="time">2 Hours ago</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="d-flex">
                                                            <div class="avatar">
                                                                <img src="dashboad/assets/images/avatar-3.png" alt="image" />
                                                            </div>
                                                            <div class="msg-txt">
                                                                <span class="name">Zane Bain</span>
                                                                <span class="msg-short">There are many variations of passages of Lorem Ipsum.</span>
                                                                <span class="time">2 Hours ago</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="show-all-btn">Show all message</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="header-btn-box">
                                                <button class="header-btn" id="notificationDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fa-light fa-bell"></i>
                                                    <span class="badge bg-danger">9+</span>
                                                </button>
                                                <ul class="notification-dropdown dropdown-menu" aria-labelledby="notificationDropdown">
                                                    <li>
                                                        <a href="#" class="d-flex align-items-center">
                                                            <div class="avatar">
                                                                <img src="dashboad/assets/images/avatar.png" alt="image" />
                                                            </div>
                                                            <div class="notification-txt">
                                                                <span class="notification-icon text-primary"><i class="fa-solid fa-thumbs-up"></i></span> <span class="fw-bold">Archer</span> Likes your post
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="d-flex align-items-center">
                                                            <div class="avatar">
                                                                <img src="dashboad/assets/images/avatar-2.png" alt="image" />
                                                            </div>
                                                            <div class="notification-txt">
                                                                <span class="notification-icon text-success"><i class="fa-solid fa-comment-dots"></i></span> <span class="fw-bold">Cody</span> Commented on your post
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="d-flex align-items-center">
                                                            <div class="avatar">
                                                                <img src="dashboad/assets/images/avatar-3.png" alt="image" />
                                                            </div>
                                                            <div class="notification-txt">
                                                                <span class="notification-icon"><i class="fa-solid fa-share"></i></span> <span class="fw-bold">Zane</span> Shared your post
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="d-flex align-items-center">
                                                            <div class="avatar">
                                                                <img src="dashboad/assets/images/avatar-4.png" alt="image" />
                                                            </div>
                                                            <div class="notification-txt">
                                                                <span class="notification-icon text-primary"><i class="fa-solid fa-thumbs-up"></i></span> <span class="fw-bold">Christopher</span> Likes your post
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="d-flex align-items-center">
                                                            <div class="avatar">
                                                                <img src="dashboad/assets/images/avatar-5.png" alt="image" />
                                                            </div>
                                                            <div class="notification-txt">
                                                                <span class="notification-icon text-success"><i class="fa-solid fa-comment-dots"></i></span> <span class="fw-bold">Charlie</span> Commented on your post
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="d-flex align-items-center">
                                                            <div class="avatar">
                                                                <img src="dashboad/assets/images/avatar-6.png" alt="image" />
                                                            </div>
                                                            <div class="notification-txt">
                                                                <span class="notification-icon"><i class="fa-solid fa-share"></i></span> <span class="fw-bold">Jayden</span> Shared your post
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="show-all-btn">Show all message</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <button class="header-btn fullscreen-btn" id="btnFullscreen"><i class="fa-light fa-expand"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <button class="header-btn header-collapse-group-btn d-lg-none"><i class="fa-light fa-ellipsis-vertical"></i></button>
                                <div class="header-btn-box">
                                    <button class="profile-btn" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="dashboad/assets/images/admin.png" alt="image" />
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="profileDropdown">
                                        <li>
                                            <div class="dropdown-txt text-center">
                                                <p class="mb-0">Shaikh Abu Dardah</p>
                                                <span class="d-block">CEO & Founder</span>
                                            </div>
                                        </li>
                                        <li><a class="dropdown-item" href="dashboard-edit-profile.html"><span class="dropdown-icon"><i class="fa-regular fa-circle-user"></i></span> Profile</a></li>
                                        <li><a class="dropdown-item" href="#"><span class="dropdown-icon"><i class="fa-regular fa-circle-question"></i></span> Help</a></li>
                                        <li><a class="dropdown-item" href="dashboard-edit-profile.html"><span class="dropdown-icon"><i class="fa-regular fa-gear"></i></span> Settings</a></li>
                                        <li><a class="dropdown-item" href="dashboard-login.html"><span class="dropdown-icon"><i class="fa-regular fa-arrow-right-from-bracket"></i></span> Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- header end --> */}

                {/* <!-- main sidebar start --> */}
                <div class="main-sidebar flush-menu">
                    <div class="main-menu">
                        <ul class="sidebar-menu scrollable">
                            <li class="sidebar-item open">
                                <ul class="sidebar-link-group">
                                    <li class="sidebar-dropdown-item">
                                        <a href="/" class="sidebar-link active"><span class="nav-icon"><i class="fa-light fa-grid-2"></i></span> <span class="sidebar-txt">Dashboard</span></a>
                                    </li>
                                </ul>
                            </li>


                            <li class="sidebar-item">
                                <a role="button" class="sidebar-link-group-title has-sub">HIMS</a>
                                <ul class="sidebar-link-group">
                                    <li class="sidebar-dropdown-item">
                                        <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-solid fa-users-medical"></i></span> <span class="sidebar-txt">OPD</span></a>
                                        <ul class="sidebar-dropdown-menu" id="authDropdown">
                                            <li class="sidebar-dropdown-item">
                                                <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-solid fa-user-cog"></i></span> <span class="sidebar-txt">Patient Management</span></a>
                                                <ul class="sidebar-dropdown-menu" id="userDropdown">
                                                    <li class="sidebar-dropdown-item"><Link to="/registration" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Patient Registration</Link></li>
                                                    <li class="sidebar-dropdown-item"><a href="/appointmentScheduling" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Appointment Scheduling</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="#" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Appointment List</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="#" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Patient visit</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="#" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Patient List</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="sidebar-dropdown-item">
                                        <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-solid fa-money-bill-1-wave"></i></span> <span class="sidebar-txt">Billing</span></a>
                                        <ul class="sidebar-dropdown-menu" id="authDropdown">


                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Deposit</a></li>
                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>OPD Billing</a></li>
                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Bill List</a></li>
                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Refund Against Deposit</a></li>
                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Credit Note</a></li>
                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Refund Against CR</a></li>
                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Refund List</a></li>
                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Financial Request Approval</a></li>
                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Bill/Receipt Cancellation</a></li>
                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Cancelled Bills</a></li>
                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Miscelleneous Expense</a></li>
                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Cost Estimation</a></li>
                                            <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>Service Work Order</a></li>


                                        </ul>
                                    </li>
                                    <li class="sidebar-dropdown-item">
                                        <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-solid fa-flask"></i></span> <span class="sidebar-txt">LIS</span></a>
                                        <ul class="sidebar-dropdown-menu" id="authDropdown">
                                            <li class="sidebar-dropdown-item">
                                                <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-solid fa-droplet-percent"></i></span> <span class="sidebar-txt">Phlebotomy</span></a>
                                                <ul class="sidebar-dropdown-menu" id="userDropdown">
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Worklist</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">User Allocation For Home</a></li>


                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Lab Home Sample Collection</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Repeat Sample</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Sample Recollection</a></li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-dropdown-item">
                                                <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span> <span class="sidebar-txt">Consolidated</span></a>
                                                <ul class="sidebar-dropdown-menu" id="userDropdown">
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Report Entry</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Validation</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Report Release</a></li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-dropdown-item">
                                                <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span> <span class="sidebar-txt">LIS Template</span></a>
                                                <ul class="sidebar-dropdown-menu" id="userDropdown">
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"><span class="nav-icon"><i class="fa-solid fa-pen-to-square"></i></span>List Workbench</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Report Entry</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Report Validation</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Report Handover</a></li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-dropdown-item">
                                                <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-solid fa-files"></i></span> <span class="sidebar-txt"> Report Handover</span></a>

                                            </li>
                                            <li class="sidebar-dropdown-item">
                                                <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-solid fa-handshake-simple"></i></span> <span class="sidebar-txt">Out Source</span></a>
                                                <ul class="sidebar-dropdown-menu" id="userDropdown">
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Out Source Pending List </a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">pending For Sample Dispatch</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link"> pending For Sample Upload</a></li>
                                                </ul>
                                            </li>
                                            <li class="sidebar-dropdown-item">
                                                <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-light fa-pen-to-square"></i></span> <span class="sidebar-txt">Workload Dashboard</span></a>

                                            </li>
                                            <li class="sidebar-dropdown-item">
                                                <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-light fa-user-cog"></i></span> <span class="sidebar-txt">Sample Tracker Screen</span></a>

                                            </li>

                                        </ul>
                                    </li>
                                    <li class="sidebar-dropdown-item">
                                        <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-light fa-user-cog"></i></span> <span class="sidebar-txt">RIS</span></a>
                                        <ul class="sidebar-dropdown-menu" id="authDropdown">
                                            <li class="sidebar-dropdown-item">
                                                <a role="button" class="sidebar-link has-sub" data-dropdown="authDropdown"><span class="nav-icon"><i class="fa-light fa-user-cog"></i></span> <span class="sidebar-txt">Patient Management</span></a>
                                                <ul class="sidebar-dropdown-menu" id="userDropdown">
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Patient Registration</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Appointment Scheduling</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Appointment Kist</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Patient visit</a></li>
                                                    <li class="sidebar-dropdown-item"><a href="dashboard-edit-profile.html" class="sidebar-link">Patient List</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>



                                </ul>
                            </li>
                            <li class="help-center">
                                <h3>Help Center</h3>
                                <p>We're an award-winning, forward thinking</p>
                                <a href="https://axonichealth.com/" class="btn btn-sm btn-light">Go to Help Center</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- main sidebar end --> */}



        </div>

    )
}

export default Dashboard