import { useState, useEffect } from "react";
import Header from '../Header';
import Items from "../Items";
import Footer from "../Footer";

function Reservation() {
    const [trailerUrl, setTrailerUrl] = useState("https://www.youtube.com/live/G8dNiCKSVkA?si=IihBv6VYUF1xbPu8");
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeLeft, setTimeLeft] = useState(600); // Thời gian đếm ngược 10 phút
    const [selectedSeats, setSelectedSeats] = useState([]); // Lưu trữ ghế đã chọn

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setTimeLeft(600); // Reset thời gian khi chọn ngày mới
    };

    useEffect(() => {
        if (selectedDate) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime > 0) {
                        return prevTime - 1;
                    } else {
                        clearInterval(timer);
                        setSelectedDate(null); // Reset lựa chọn khi hết thời gian
                        return 600; // Reset thời gian
                    }
                });
            }, 1000);

            return () => clearInterval(timer); // Dọn dẹp bộ đếm khi component unmount hoặc selectedDate thay đổi
        }
    }, [selectedDate]);

    const showtimes = {
        "2024-05-16": { time: "20:15", room: 1 },
        "2024-05-17": { time: "18:00", room: 2 },
        // Thêm các ngày và thời gian chiếu khác tại đây
    };

    const handleSeatClick = (seat) => {
        setSelectedSeats((prevSelectedSeats) => {
            if (prevSelectedSeats.includes(seat)) {
                return prevSelectedSeats.filter(s => s !== seat);
            } else {
                return [...prevSelectedSeats, seat];
            }
        });
    };

    const renderSeats = (row) => {
        const seats = [];
        for (let i = 1; i <= 14; i++) {
            const seat = `${row}${i}`;
            seats.push(
                <div
                    key={seat}
                    className={`aspect-square rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center md:h-6 lg:h-10 cursor-pointer ${selectedSeats.includes(seat) ? 'bg-red-500' : 'bg-gray-700 md:bg-[#252A31]'}`}
                    onClick={() => handleSeatClick(seat)}
                >
                    <p className="hidden lg:block text-sm lg:text-base">{seat}</p>
                </div>
            );
        }
        return seats;
    };

    const formatTimeLeft = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div>
            <div className="hidden xl:block absolute w-full inset-0 m-auto z-20">
                <div className="w-full max-w-4xl m-auto h-[473px] py-7 pt-24 flex gap-10">
                    <div className="relative h-[333px] min-w-[238px] shadow-lg">
                        <Items />
                    </div>
                    <div className="text-sm flex flex-col">
                        <div className="flex items-center gap-2 mt-2">
                            <h3 className="font-bold text-2xl">TÊN PHIM</h3>
                            <div className="rounded-md p-2 border border-white font-bold text-sm">3D</div>
                        </div>
                        <div className="flex items-center mt-2 gap-5 text-sm md:text-base flex-wrap">
                            <p>Thể loại</p>
                            <p>Quốc gia</p>
                            <p>Số phút</p>
                            <p>Đạo diễn</p>
                            <p>Diễn viên</p>
                            <p>Khởi chiếu</p>
                        </div>
                        <p className="text-lg mt-5 line-clamp-4">"Kong và Godzilla - hai sinh vật vĩ đại huyền thoại, hai kẻ thù truyền kiếp sẽ cùng bắt tay thực thi một sứ mệnh chung mang tính sống còn để bảo vệ nhân loại,
                            và trận chiến gắn kết chúng với loài người mãi mãi sẽ bắt đầu."</p>
                        <div className="text-red-500 font-bold mt-5">Khuyến cáo</div>

                        <div className="mt-2 flex items-center gap-4 flex-1">
                            <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R7rbddddba:" data-state="closed" className="text-sm underline">Chi tiết nội dung</button>
                            <button className="border border-yellow-500 rounded-full py-2 px-10 text-yellow-500 hover:scale-105" type="button" onClick={() => window.open(trailerUrl, '_blank')}
                            >
                                Xem trailer
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex h-[91px] justify-center bg-[#1A1D23]" role="tablist" aria-orientation="horizontal">
                        <button className="focus:border-none focus:outline-none" role="tab" type="button" aria-selected="true" tabIndex="0" onClick={() => handleDateClick("2024-05-16")} disabled={selectedDate === "2024-05-16"}>
                            <div className="w-[72px] h-full flex flex-col items-center justify-center text-xs transition-colors bg-red-600">
                                <p>th.05</p>
                                <p className="text-xl font-bold">16</p>
                                <p>Thứ năm</p>
                            </div>
                        </button>
                        <button className="focus:border-none focus:outline-none" role="tab" type="button" aria-selected="false" tabIndex="0" onClick={() => handleDateClick("2024-05-17")} disabled={selectedDate === "2024-05-17"}>
                            <div className="w-[72px] h-full flex flex-col items-center justify-center text-xs transition-colors bg-red-600">
                                <p>th.05</p>
                                <p className="text-xl font-bold">17</p>
                                <p>Thứ sáu</p>
                            </div>
                        </button>
                        {/* Thêm các nút khác cho các ngày khác tại đây */}
                    </div>
                </div>
                <div className="text-sm text-center mx-4 md:px-6 lg:mx-auto mt-4 text-orange-500">LƯU Ý</div>
                {selectedDate && showtimes[selectedDate] && (
                    <div>
                        <div id="headlessui-tabs-panel-:Rurddddba:" role="tabpanel" tabIndex="0" data-headlessui-state="selected">
                            <div className="mx-auto max-w-7xl">
                                <div className="pb-10 pt-5 w-full xl:w-3/4 mx-auto px-4 xl:px-0">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="text-sm md:text-base self-end">
                                            Giờ chiếu:
                                            <span className="font-bold"> {showtimes[selectedDate].time}</span>
                                        </div>
                                        <div className="rounded-xl border border-red-500 p-2 text-sm md:text-base hidden xl:block">
                                            Thời gian chọn ghế:
                                            <span className="font-semibold"> {formatTimeLeft(timeLeft)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4 text-center font-bold text-lg">
                                Phòng chiếu số: {showtimes[selectedDate].room}
                            </div>
                            <div className="space-y-1 -mx-4">
                                {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(row => (
                                    <div key={row} className="grid md:flex gap-1 items-center justify-center seat">
                                        <div className="aspect-square w-3 sm:w-6 xl:h-10 xl:w-10 rounded-[2px] sm:rounded-sm xl:rounded-[8px] flex items-center justify-center text-[8px] sm:text-sm lg:hidden">{row}</div>
                                        {renderSeats(row)}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-2 w-full xl:w-auto mt-20">
                            <button class="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2">Quay lại</button>
                            <button class="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 hover:scale-105 transition duration-300" disabled>Thanh toán</button>

                        </div>
                    </div>
                )}
                
            </div>
        </div>
    );
}

export default Reservation;
