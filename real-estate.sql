-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sty 27, 2026 at 04:03 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `real-estate`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `apartaments`
--

CREATE TABLE `apartaments` (
  `id` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `city` varchar(100) NOT NULL,
  `price` decimal(9,2) NOT NULL,
  `picture` varchar(50) DEFAULT NULL,
  `date_add` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `apartaments`
--

INSERT INTO `apartaments` (`id`, `description`, `city`, `price`, `picture`, `date_add`) VALUES
(6, 'Dom jednorodzinny', 'Chodów', 1234.00, 'apartment1.png', '2026-01-21 15:47:06'),
(7, 'Mieszkanie 60m', 'Gdańsk', 200000.00, 'apartment1.png', '2026-01-21 16:11:37'),
(8, 'Dom bliźniak', 'Kraków', 190000.00, 'apartment1.png', '2026-01-22 12:39:08'),
(10, 'Dom w stanie deweloperskim', 'Wrocław', 2000000.00, 'apartment1.png', '2026-01-22 12:45:24'),
(11, 'Mieszkanie na nowym osiedlu', 'Kraków', 123.00, 'apartment1.png', '2026-01-23 13:32:44'),
(12, 'Dom jednorodzinny z ogrodem', 'Kraków', 1000000.00, NULL, '2026-01-26 17:00:32');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `apartaments`
--
ALTER TABLE `apartaments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apartaments`
--
ALTER TABLE `apartaments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
