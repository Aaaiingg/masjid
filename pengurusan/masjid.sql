-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2025 at 03:12 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `masjid`
--

-- --------------------------------------------------------

--
-- Table structure for table `asnaf`
--

CREATE TABLE `asnaf` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `ic` varchar(12) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `job` varchar(255) DEFAULT NULL,
  `income` varchar(255) DEFAULT NULL,
  `tanggungan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `asnaf`
--

INSERT INTO `asnaf` (`id`, `name`, `ic`, `address`, `job`, `income`, `tanggungan`) VALUES
(12, 'ismail', '661215115182', 'kuala terengganu', 'berniaga sendiri', '750', '4'),
(13, 'hamid', '010104110386', 'A 1827 wakaf tengah', 'berniaga sendiri', '500', '4'),
(14, 'azizah', '712548681142', 'kg mengabang telipot', 'peniaga pasar', '800', '5');

-- --------------------------------------------------------

--
-- Table structure for table `complain`
--

CREATE TABLE `complain` (
  `id` int(10) NOT NULL,
  `message` varchar(500) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(20) NOT NULL,
  `subject` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `complain`
--

INSERT INTO `complain` (`id`, `message`, `name`, `email`, `subject`) VALUES
(10, 'tandas kurang bersih dah kerap saya datang tapi kotor', 'ain', 'nur', 'Kebersihan kurang memuaskan'),
(11, 'kbersihan kurang memuaskan', '-', '-', 'kebersihan sebahagian drpd iman');

-- --------------------------------------------------------

--
-- Table structure for table `economy`
--

CREATE TABLE `economy` (
  `id` int(11) NOT NULL,
  `facility_name` varchar(255) DEFAULT NULL,
  `facility_desc` varchar(255) DEFAULT NULL,
  `facility_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `economy`
--

INSERT INTO `economy` (`id`, `facility_name`, `facility_desc`, `facility_status`) VALUES
(22, 'dewan', 'menyediakan sewaan untuk kegunaan kariah seperti majlis nikah kahwin kenduri dan sebagainya', 'Full'),
(23, 'tapak vending meachine', 'membuka tapak sewaan vending machine', 'one left');

-- --------------------------------------------------------

--
-- Table structure for table `jawatankuasa`
--

CREATE TABLE `jawatankuasa` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `umur` varchar(255) NOT NULL,
  `ic` varchar(12) NOT NULL,
  `address` varchar(255) NOT NULL,
  `job` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jawatankuasa`
--

INSERT INTO `jawatankuasa` (`id`, `name`, `umur`, `ic`, `address`, `job`, `role`) VALUES
(1, 'ismail', '24', '010104110386', 'kg wakaf tengah', 'peniaga sendiri', 'ahli');

-- --------------------------------------------------------

--
-- Table structure for table `khairat`
--

CREATE TABLE `khairat` (
  `id` int(10) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `ic` varchar(12) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `payment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `khairat`
--

INSERT INTO `khairat` (`id`, `name`, `ic`, `phone`, `address`, `payment`) VALUES
(11, 'haji karim', '661215115182', '0166098014', 'A 1827 wakaf tengah', '50'),
(12, 'Nur Ain', '010104110386', '0166098014', 'A 1827 wakaf tengah', '30'),
(13, 'amin', '990127116371', '0166098014', 'kg batu rakit', '80');

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `id` int(10) NOT NULL,
  `employee` varchar(255) NOT NULL,
  `emp_id` int(10) NOT NULL,
  `leave_type` varchar(255) NOT NULL,
  `date_from` varchar(255) NOT NULL,
  `date_to` varchar(255) NOT NULL,
  `reason` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leaves`
--

INSERT INTO `leaves` (`id`, `employee`, `emp_id`, `leave_type`, `date_from`, `date_to`, `reason`) VALUES
(8, 'ismail', 1, 'Medical Leave', '09/01/2025', '11/01/2025', 'huhuh');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `email`) VALUES
(1, 'test', 'test', 'gmhs13@yopmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `orphan`
--

CREATE TABLE `orphan` (
  `id` int(10) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `ic` varchar(12) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `dob` varchar(20) NOT NULL,
  `no_sibling` varchar(20) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `guardian_name` varchar(255) DEFAULT NULL,
  `image` text NOT NULL,
  `guardian_salary` varchar(255) DEFAULT NULL,
  `guardian_job` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orphan`
--

INSERT INTO `orphan` (`id`, `full_name`, `ic`, `phone`, `dob`, `no_sibling`, `address`, `guardian_name`, `image`, `guardian_salary`, `guardian_job`) VALUES
(49, 'amira syazwani', '050215110384', '0123456789', '15/02/2025', '6', 'A 1827 wakaf tengah', 'hamidah', 'user.jpg', 'RM650', 'pembantu kedai runcit'),
(50, 'shahrul izwan', '051115110362', '012345876', '15/11/2005', '5', 'A 1584 wakaf tengah', 'sulamah', 'Dr bad.png', 'RM500', 'PEMBANTU KEDAI MAKAN'),
(51, 'khairul', '050215110584', '0123456789', '10/01/2005', '5', 'A 1827 wakaf tengah', 'saleh', 'user.jpg', '500', 'upah mesin rumput');

-- --------------------------------------------------------

--
-- Table structure for table `temp`
--

CREATE TABLE `temp` (
  `id` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `temp`
--

INSERT INTO `temp` (`id`, `email`, `token`) VALUES
(19, 'test555@yopmail.com', '46fn0pl3'),
(19, 'test555@yopmail.com', 'w6pvf2oq'),
(21, 'te555@yopmail.com', '9sfs6gu8');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `email_status`) VALUES
(22, 'Nur Ain', 'nurainnazhirah@gmail.com', '1234', 'verified');

-- --------------------------------------------------------

--
-- Table structure for table `verify`
--

CREATE TABLE `verify` (
  `id` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `verify`
--

INSERT INTO `verify` (`id`, `username`, `email`, `token`) VALUES
(17, 'Nur Ain', 'nurainnazhirah@gmail.com', '3ns094yl');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asnaf`
--
ALTER TABLE `asnaf`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `complain`
--
ALTER TABLE `complain`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `economy`
--
ALTER TABLE `economy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jawatankuasa`
--
ALTER TABLE `jawatankuasa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `khairat`
--
ALTER TABLE `khairat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orphan`
--
ALTER TABLE `orphan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `verify`
--
ALTER TABLE `verify`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `asnaf`
--
ALTER TABLE `asnaf`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `complain`
--
ALTER TABLE `complain`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `economy`
--
ALTER TABLE `economy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `jawatankuasa`
--
ALTER TABLE `jawatankuasa`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `khairat`
--
ALTER TABLE `khairat`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orphan`
--
ALTER TABLE `orphan`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `verify`
--
ALTER TABLE `verify`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
