-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 15, 2024 lúc 10:10 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `baobongda`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `full_name` varchar(250) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `created` date NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id`, `full_name`, `username`, `password`, `email`, `created`, `status`) VALUES
(1, 'Lê Thanh Tú', 'acc1', '123', 'lethanhtu@gmail.com', '2024-06-07', 1),
(10, 'Nguyễn Hoàng Tú', 'acc3', '321', 'tuhoangnguyen@gmail.com', '2024-07-15', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `link` text NOT NULL,
  `content` text NOT NULL,
  `description` text NOT NULL,
  `pub_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `image` varchar(250) NOT NULL,
  `title` text NOT NULL,
  `category` text NOT NULL,
  `accountID` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`id`, `link`, `content`, `description`, `pub_date`, `created`, `image`, `title`, `category`, `accountID`, `status`) VALUES
(36, '/tin-tuc-copa-america/messi-khoc-nuc-no-sau-chan-thuong-358-393654.html', 'ok không', 'Tiền đạo Lionel Messi đã phải rời sân ở trận chung kết Copa America giữa ĐT Argentina và Colombia vì chấn thương.', '2024-07-15 12:34:16', '2024-07-15 05:34:26', 'https://static.bongda24h.vn/medias/standard/2024/07/15/449532918_1029896189136730_8885379290888655613_n-1507095749.png', 'Messi rơi nước mắt không ngừng khi rời sân vì chấn thương', '', 1, 1),
(37, '/nhan-vat/nico-williams-phia-truoc-la-bau-troi-389-393663.html', 'bàn thắng của nico thật đẹp', 'Chỉ 2 ngày sau sinh nhật lần thứ 22, Nico Williams đã góp công lớn giúp đội tuyển Tây Ban Nha lần thứ 4 giành chức vô địch Euro, sau khi đánh bại đội tuyển Anh với t', '2024-07-15 14:27:25', '2024-07-15 07:32:11', 'https://static.bongda24h.vn/medias/standard/2024/07/15/dlbeatsnoopcom-3000-41jclwnkmq-1507113018.jpg', 'Nico Williams vô địch Euro 2024: Phía trước là bầu trời', '', 1, 1),
(38, '/nhan-vat/nico-williams-phia-truoc-la-bau-troi-389-393663.html', 'rất hay', 'Chỉ 2 ngày sau sinh nhật lần thứ 22, Nico Williams đã góp công lớn giúp đội tuyển Tây Ban Nha lần thứ 4 giành chức vô địch Euro, sau khi đánh bại đội tuyển Anh với t', '2024-07-15 14:27:25', '2024-07-15 07:32:18', 'https://static.bongda24h.vn/medias/standard/2024/07/15/dlbeatsnoopcom-3000-41jclwnkmq-1507113018.jpg', 'Nico Williams vô địch Euro 2024: Phía trước là bầu trời', '', 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `favorite`
--

CREATE TABLE `favorite` (
  `id` int(11) NOT NULL,
  `link` text NOT NULL,
  `description` text NOT NULL,
  `pub_date` date NOT NULL,
  `image` text NOT NULL,
  `created` date NOT NULL,
  `title` text NOT NULL,
  `category` text NOT NULL,
  `accountID` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `favorite`
--

INSERT INTO `favorite` (`id`, `link`, `description`, `pub_date`, `image`, `created`, `title`, `category`, `accountID`, `status`) VALUES
(29, 'https://bongda24h.vn/nhan-dinh-bong-da/du-doan-tay-ban-nha-vs-duc-hom-nay-344-392576.html', ' Nhận định Tây Ban Nha vs Đức ở mức cân bằng, cuộc đọ sức giữa hai đội bóng chơi thuyết phục nhất Euro 2024 đến thời điểm hiện tại sẽ rất hấp dẫn. ', '2024-07-03', 'https://static.bongda24h.vn/medias/standard/2024/07/03/23-0307190909.jpg', '2024-07-05', 'Nhận định Tây Ban Nha vs Đức (23h00 ngày 05/07): Siêu kịch tính, siêu hấp dẫn', 'Euro 2024, TIN NÓNG, Nhận định Euro, Tin Nóng, Nhận định bóng đá', 1, 1),
(30, '/doi-bong/dt-phap-dung-buoc-o-ban-ket-euro-dau-hoi-lon-cho-phuong-phap-deschamps-405-393211.html', ' Didier Deschamps đã dẫn dắt tuyển Pháp gần 12 năm và sau 159 trận đấu, cách Les Bleus của ông thi đấu không thực sự đáng ngạc nhiên. Pháp của Deschamps được xây dựng trên nền tảng phòng thủ vững chắc. Một đội bóng được thiết kế để giảm thiểu rủi ro, đặc biệt là trong các trận knock-out loại trực tiếp. ', '2024-07-10', 'https://static.bongda24h.vn/medias/standard/2024/07/10/dlbeatsnoopcom-3000-crvsfdyki8-1007081923.jpg', '2024-07-10', 'ĐT Pháp dừng bước ở bán kết Euro: Dấu hỏi lớn cho \"phương pháp Deschamps\"', 'Đội bóng,  Bình luận, Tin Nóng, Trang chủ, Euro 2024', 1, 1),
(32, '/nhan-dinh-bong-da/nhan-dinh-du-doan-noi-bat-cac-tran-dau-sang-ngay-11-07-344-393269.html', ' Sáng ngày 11/07 sẽ diễn ra những trận đấu hấp dẫn tại Euro và Copa America 2024, cùng điểm qua những nhận định, dự đoán cho các trận đấu này. ', '2024-07-10', 'https://static.bongda24h.vn/medias/standard/2024/07/10/3-1007113849.png', '2024-07-10', 'Nhận định - dự đoán nổi bật các trận đấu sáng ngày 11/07', 'Euro 2024, Tin Nóng, TIN NÓNG, Nhận định bóng đá', 1, 1),
(33, '/nhan-dinh-bong-da/nhan-dinh-santos-vs-ituano-hang-2-brazil-344-393657.html', ' Santos vs Ituano thuộc giải Hạng 2 Brazil 2024: Chuyên gia nhận định trận đấu, dự đoán kết quả bóng đá, thống kê - phân tích tỷ số trận đấu hôm nay. ', '2024-07-15', 'https://static.bongda24h.vn/medias/standard/2024/07/15/soi-keo-santos-vs-ituano-hang2-brazil-1507100013.jpg', '2024-07-15', 'Nhận định bóng đá Santos vs Ituano 6h00 ngày 16/7 (Hạng 2 Brazil 2024)', 'Tin Nóng, Nhận định bóng đá, Nhận định bóng đá Brazil', 10, 1),
(34, '/euro-2024/dan-sao-tuyen-anh-lam-mot-dieu-sau-that-bai-truoc-tbn-363-393633.html', ' Các cầu thủ Anh và Gareth Southgate đã ngay lập tức gỡ bỏ huy chương á quân sau trận thua 1-2 trước Tây Ban Nha trong trận chung kết Euro 2024. ', '2024-07-15', 'https://static.bongda24h.vn/medias/standard/2024/07/15/32-1507052145.png', '2024-07-15', 'Dàn sao tuyển Anh làm một điều sau thất bại trước TBN?', 'Euro 2024, Tin Nóng, TIN NÓNG, Bóng đá Anh, Ngoại hạng Anh', 10, 1),
(35, '/video/tay-ban-nha-anh-ket-qua-euro-15-7-2024-189-393619.html', ' Link xem video bóng đá Tây Ban Nha vs Anh hôm nay 15/7. Cập nhật kết quả tỷ số, số liệu thống kê, clip highlights Tây Ban Nha - Anh Chung kết Euro 2024. ', '2024-07-15', 'https://static.bongda24h.vn/medias/standard/2024/07/15/video-tay-ban-nha-vs-anh-euro-2024-1507120903.jpg', '2024-07-15', 'Video Tây Ban Nha vs Anh (Chung kết Euro 2024): Cao trào hiệp 2', 'Euro 2024, Kết quả Euro, Video Euro, TIN NÓNG, Tin Nóng, Video, Video Tổng hợp , Lựa chọn của ban biên tập, Bóng đá Châu Âu, Bóng đá Anh, Bóng đá Tây Ban Nha, Video Bóng đá Anh , Video Bóng đá TBN', 10, 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accountID` (`accountID`);

--
-- Chỉ mục cho bảng `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accountID` (`accountID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT cho bảng `favorite`
--
ALTER TABLE `favorite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `account` (`id`);

--
-- Các ràng buộc cho bảng `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `account` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
