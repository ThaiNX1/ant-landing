import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BreakpointService } from '../../core/services/breakpoint.service';
import { BaseClass } from '../../core/base.class';
import { LayoutComponent } from '../../layout/layout.component';
import { BannerType } from '../../core/enum';

interface TabData {
    highlights: string[];
    features: { icon: string; title: string; description: string }[];
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent extends BaseClass {
    bp = inject(BreakpointService);
    layout = inject(LayoutComponent, { optional: true });

    activeTab = signal('employee');
    activeTabIndex = signal(0);
    slideDirection = signal<'left' | 'right'>('right');
    isAnimating = signal(false);

    tabs = [
        { key: 'employee', label: 'Dành cho Nhân viên' },
        { key: 'manager', label: 'Dành cho Quản lý' },
        { key: 'business', label: 'Dành cho Doanh nghiệp' },
    ];

    tabDataMap: Record<string, TabData> = {
        employee: {
            highlights: [
                'Chấm công dễ dàng bằng khuôn mặt, QR code, WiFi',
                'Xem bảng công, lương trực tiếp trên app',
                'Gửi đơn từ, phê duyệt nhanh chóng',
            ],
            features: [
                {
                    icon: 'pi-camera',
                    title: 'Chấm công đa dạng',
                    description:
                        'Chấm công bằng khuôn mặt, QR code, WiFi, GPS - linh hoạt mọi môi trường làm việc.',
                },
                {
                    icon: 'pi-clock',
                    title: 'Theo dõi công việc',
                    description:
                        'Xem lịch sử chấm công, thời gian làm việc và bảng công của tháng ngay trên điện thoại.',
                },
                {
                    icon: 'pi-file-edit',
                    title: 'Đơn từ điện tử',
                    description:
                        'Gửi đơn nghỉ phép, đi muộn, về sớm trực tiếp trên app, không cần giấy tờ.',
                },
                {
                    icon: 'pi-wallet',
                    title: 'Tra cứu lương',
                    description:
                        'Xem chi tiết bảng lương, phụ cấp, thưởng minh bạch và chính xác.',
                },
            ],
        },
        manager: {
            highlights: [
                'Quản lý chấm công toàn bộ nhân viên real-time',
                'Phê duyệt đơn từ nhanh chóng trên mobile',
                'Báo cáo công, lương tự động và chính xác',
            ],
            features: [
                {
                    icon: 'pi-chart-bar',
                    title: 'Dashboard quản lý',
                    description:
                        'Theo dõi tình trạng chấm công, đi muộn, về sớm của toàn bộ nhân viên real-time.',
                },
                {
                    icon: 'pi-check-circle',
                    title: 'Phê duyệt linh hoạt',
                    description:
                        'Phê duyệt đơn nghỉ phép, tăng ca, đi công tác ngay trên điện thoại, mọi lúc mọi nơi.',
                },
                {
                    icon: 'pi-users',
                    title: 'Quản lý ca làm việc',
                    description:
                        'Thiết lập nhiều ca làm việc, phân ca linh hoạt cho từng phòng ban.',
                },
                {
                    icon: 'pi-file-export',
                    title: 'Báo cáo tự động',
                    description:
                        'Xuất báo cáo công, lương theo tuần/tháng, tự động tính toán chính xác.',
                },
            ],
        },
        business: {
            highlights: [
                'Số hóa toàn bộ quy trình chấm công và HRM',
                'Tích hợp lương, tài sản, bảo hiểm',
                'Mở rộng với thiết bị IoT thông minh (phiên bản cao cấp)',
            ],
            features: [
                {
                    icon: 'pi-building',
                    title: 'Quản lý tổ chức',
                    description:
                        'Quản lý nhiều chi nhánh, phòng ban, điểm chấm công trên cùng một hệ thống.',
                },
                {
                    icon: 'pi-sitemap',
                    title: 'Tích hợp HRM toàn diện',
                    description:
                        'Quản lý nhân sự, lương, tài sản, bảo hiểm, hợp đồng tất cả trong một nền tảng.',
                },
                {
                    icon: 'pi-chart-line',
                    title: 'Phân tích dữ liệu',
                    description:
                        'Báo cáo chi tiết về năng suất, chi phí nhân sự, xu hướng chấm công.',
                },
                {
                    icon: 'pi-tablet',
                    title: 'Điều khiển thiết bị IoT',
                    description:
                        'Tích hợp máy chấm công vân tay, nhận diện khuôn mặt, cửa từ (phiên bản cao cấp).',
                },
            ],
        },
    };

    proofStats = [
        { number: '5,000+', label: 'Nhân viên đang sử dụng' },
        { number: '100+', label: 'Doanh nghiệp tin dùng' },
        { number: '50,000+', label: 'Lượt chấm công/ngày' },
        { number: '99.9%', label: 'Uptime hệ thống' },
    ];

    steps = [
        {
            title: 'Đăng ký tài khoản',
            description: 'Tạo tài khoản doanh nghiệp chỉ trong 2 phút, không cần cài đặt phức tạp.',
        },
        {
            title: 'Thiết lập hệ thống',
            description: 'Cấu hình ca làm việc, phòng ban, điểm chấm công và thêm nhân viên vào hệ thống.',
        },
        {
            title: 'Bắt đầu chấm công',
            description: 'Nhân viên tải app và bắt đầu chấm công ngay - dễ dàng, nhanh chóng, chính xác.',
        },
    ];

    currentTabData = computed(() => this.tabDataMap[this.activeTab()]);

    banner = computed(() => {
        const sharedData = this.layout?.sharedData();
        if (!sharedData?.banners) return null;
        return sharedData.banners?.find(
            (item: any) => item.page === BannerType.HOME && item.isActive,
        ) || null;
    });

    constructor() {
        super();
    }

    selectTab(key: string, index: number): void {
        if (this.isAnimating() || key === this.activeTab()) return;

        const prevIndex = this.activeTabIndex();
        this.slideDirection.set(index > prevIndex ? 'right' : 'left');
        this.isAnimating.set(true);

        // Brief timeout to allow CSS transition out, then swap content and animate in
        setTimeout(() => {
            this.activeTabIndex.set(index);
            this.activeTab.set(key);
            setTimeout(() => this.isAnimating.set(false), 350);
        }, 10);
    }
}
