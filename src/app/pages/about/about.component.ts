import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {
    features = [
        {
            icon: 'pi-camera',
            title: 'Chấm công đa dạng',
            description:
                'Hỗ trợ nhiều hình thức chấm công: nhận diện khuôn mặt, QR code, WiFi, GPS - phù hợp mọi môi trường làm việc.',
        },
        {
            icon: 'pi-clock',
            title: 'Quản lý ca làm việc',
            description:
                'Thiết lập nhiều ca làm việc linh hoạt, nhiều điểm chấm công, phân ca tự động cho từng phòng ban.',
        },
        {
            icon: 'pi-file-edit',
            title: 'Phê duyệt đơn từ',
            description:
                'Quản lý đơn nghỉ phép, tăng ca, công tác, đi muộn/về sớm - phê duyệt nhanh chóng trên mobile.',
        },
        {
            icon: 'pi-wallet',
            title: 'Bảng công & Lương',
            description:
                'Tự động tính toán bảng công, lương, phụ cấp, thưởng chính xác - xuất báo cáo chi tiết.',
        },
        {
            icon: 'pi-building',
            title: 'Quản lý tài sản',
            description:
                'Theo dõi tài sản công ty, thiết bị, phương tiện được giao cho nhân viên.',
        },
        {
            icon: 'pi-tablet',
            title: 'Tích hợp thiết bị IoT',
            description:
                'Kết nối máy chấm công vân tay, nhận diện khuôn mặt, cửa từ thông minh (phiên bản cao cấp).',
        },
    ];

    reasons = [
        {
            icon: 'pi-bolt',
            title: 'Dễ triển khai & Sử dụng',
            description:
                'Giao diện đơn giản, trực quan — doanh nghiệp có thể triển khai và nhân viên làm quen ngay trong vài phút.',
        },
        {
            icon: 'pi-shield',
            title: 'Chính xác & Minh bạch',
            description:
                'Dữ liệu chấm công chính xác, không gian lận - bảng công, lương minh bạch cho cả nhân viên và quản lý.',
        },
        {
            icon: 'pi-money-bill',
            title: 'Tiết kiệm chi phí',
            description:
                'Giá cả hợp lý từ 29.000đ/người/tháng, thay thế máy chấm công truyền thống, giảm chi phí vận hành.',
        },
        {
            icon: 'pi-mobile',
            title: 'Linh hoạt đa nền tảng',
            description:
                'Sử dụng trên web, iOS, Android — làm việc từ xa, văn phòng, công trường đều thuận tiện.',
        },
    ];

    stats = [
        { number: '5,000+', label: 'Nhân viên sử dụng' },
        { number: '100+', label: 'Doanh nghiệp tin dùng' },
        { number: '50,000+', label: 'Lượt chấm công/ngày' },
        { number: '99.9%', label: 'Uptime' },
    ];
}
