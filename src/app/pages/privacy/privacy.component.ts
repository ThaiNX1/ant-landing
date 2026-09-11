import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-privacy',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './privacy.component.html',
    styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
    sections = [
        {
            title: '1. Thông tin chúng tôi thu thập',
            content: 'Chúng tôi thu thập các thông tin cá nhân mà bạn cung cấp khi đăng ký tài khoản, bao gồm: họ tên, địa chỉ email, số điện thoại, địa chỉ. Chúng tôi cũng thu thập thông tin về thiết bị của bạn như địa chỉ IP, loại trình duyệt, và dữ liệu sử dụng để cải thiện dịch vụ.'
        },
        {
            title: '2. Mục đích sử dụng thông tin',
            content: 'Thông tin của bạn được sử dụng để: cung cấp và cải thiện dịch vụ, xử lý giao dịch, gửi thông báo quan trọng về dịch vụ, hỗ trợ khách hàng, và phân tích để nâng cao trải nghiệm người dùng. Chúng tôi cam kết chỉ sử dụng thông tin cho các mục đích đã nêu.'
        },
        {
            title: '3. Bảo mật thông tin',
            content: 'Chúng tôi áp dụng các biện pháp bảo mật tiên tiến để bảo vệ thông tin cá nhân của bạn khỏi truy cập trái phép, mất mát, hoặc tiết lộ. Dữ liệu được mã hóa trong quá trình truyền tải và lưu trữ trên các máy chủ an toàn. Chỉ nhân viên được ủy quyền mới có thể truy cập thông tin của bạn.'
        },
        {
            title: '4. Chia sẻ thông tin',
            content: 'Chúng tôi không bán, cho thuê hoặc chia sẻ thông tin cá nhân của bạn với bên thứ ba, trừ khi: có sự đồng ý của bạn, cần thiết để cung cấp dịch vụ (ví dụ: đối tác vận chuyển), hoặc theo yêu cầu của pháp luật. Các đối tác của chúng tôi cũng cam kết bảo mật thông tin của bạn.'
        },
        {
            title: '5. Quyền của người dùng',
            content: 'Bạn có quyền: truy cập và cập nhật thông tin cá nhân, yêu cầu xóa tài khoản và dữ liệu, từ chối nhận email marketing, yêu cầu sao chép dữ liệu cá nhân. Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi qua email hoặc trang hỗ trợ.'
        },
        {
            title: '6. Cookie và công nghệ theo dõi',
            content: 'Chúng tôi sử dụng cookie và công nghệ tương tự để cải thiện trải nghiệm người dùng, phân tích lưu lượng truy cập, và cá nhân hóa nội dung. Bạn có thể quản lý tùy chọn cookie trong cài đặt trình duyệt của mình. Việc tắt cookie có thể ảnh hưởng đến một số chức năng của website.'
        },
        {
            title: '7. Ảnh chấm công và dữ liệu khuôn mặt',
            content: `Khi người dùng thực hiện chấm công, ANT Tiko yêu cầu người dùng chụp một ảnh thông thường bằng camera của thiết bị. Ảnh này có thể chứa khuôn mặt của người dùng và được liên kết với tài khoản người dùng, tổ chức, thời gian chấm công và vị trí chấm công.

Ảnh chấm công được thu thập và sử dụng duy nhất làm bằng chứng hỗ trợ rằng người dùng đã chấm công tại địa điểm được chỉ định. Ảnh có thể được xem xét khi cần xác nhận hồ sơ chấm công, bao gồm việc xác nhận chấm công và tiền lương vào cuối chu kỳ chấm công hằng tháng.

ANT Tiko không sử dụng ảnh chấm công cho mục đích nhận diện khuôn mặt, định danh sinh trắc học, xác thực khuôn mặt, so khớp khuôn mặt, phát hiện tính sống, lập hồ sơ khuôn mặt, quảng cáo, theo dõi người dùng hoặc huấn luyện mô hình trí tuệ nhân tạo.

ANT Tiko không trích xuất, tạo hoặc lưu trữ vector đặc trưng khuôn mặt, hình học khuôn mặt, điểm mốc khuôn mặt, mẫu sinh trắc học hoặc bất kỳ định danh sinh trắc học nào khác từ ảnh chấm công.

Lưu trữ và bảo mật: Ảnh chấm công được truyền qua kết nối HTTPS được mã hóa và được lưu trữ bằng Amazon Simple Storage Service (Amazon S3) tại khu vực ap-southeast-1 ở Singapore. Quyền truy cập ảnh chấm công chỉ giới hạn cho người dùng gắn với bản ghi chấm công và quản trị viên được ủy quyền của tổ chức của người dùng. Không người dùng nào khác hoặc nhân sự không được ủy quyền được phép truy cập các ảnh này.

Chia sẻ và tiết lộ: ANT Tiko không bán, cho thuê hoặc chia sẻ ảnh chấm công với bên thứ ba cho mục đích quảng cáo, lập hồ sơ, nhận diện khuôn mặt, huấn luyện trí tuệ nhân tạo, sử dụng thương mại độc lập hoặc bất kỳ mục đích không liên quan nào khác. Amazon Web Services chỉ đóng vai trò là nhà cung cấp hạ tầng đám mây và lưu trữ cho ANT Tiko. Amazon Web Services không được phép sử dụng ảnh chấm công cho các mục đích độc lập của riêng mình. Bất kỳ nhà cung cấp dịch vụ nào xử lý ảnh chấm công thay mặt ANT Tiko đều phải cung cấp mức độ bảo vệ dữ liệu tương tự hoặc tương đương như được mô tả trong Chính sách bảo mật này. ANT Tiko chỉ có thể tiết lộ thông tin khi pháp luật hiện hành yêu cầu, theo yêu cầu pháp lý hợp lệ hoặc khi cần thiết để bảo vệ an ninh và tính toàn vẹn của dịch vụ.

Thời gian lưu giữ: Ảnh chấm công được lưu giữ trong một chu kỳ chấm công và tiền lương, tối đa 45 ngày kể từ ngày chấm công. Sau khi hết thời hạn lưu giữ 45 ngày, ảnh sẽ bị xóa trừ khi ảnh cần được giữ lại cho một yêu cầu xác nhận chấm công hoặc tiền lương chưa được giải quyết, nghĩa vụ pháp lý hợp lệ hoặc yêu cầu khác theo pháp luật hiện hành.

Rút lại sự đồng ý: Người dùng có thể ngăn việc thu thập ảnh chấm công trong tương lai bằng cách tắt quyền Camera của ANT Tiko trong ứng dụng Cài đặt của iOS. Việc tắt quyền Camera sẽ ngăn thu thập ảnh mới nhưng không tự động xóa các ảnh đã được tải lên trước đó. Vì ảnh là bắt buộc đối với phương thức chấm công bằng ảnh, việc tắt quyền Camera có thể khiến người dùng không thể hoàn tất phương thức chấm công này.

Yêu cầu xóa: Người dùng có thể yêu cầu xóa ảnh chấm công hiện có bằng cách gửi yêu cầu xóa thông qua quy trình phê duyệt của tổ chức hoặc liên hệ qua email: supports.antjsc@gmail.com. Yêu cầu xóa sẽ được quản trị viên được ủy quyền của tổ chức của người dùng xem xét. Sau khi yêu cầu được xác minh và phê duyệt, ảnh áp dụng sẽ bị xóa khỏi hệ thống lưu trữ đang hoạt động của ANT Tiko. Yêu cầu có thể bị từ chối hoặc trì hoãn chỉ khi ảnh cần thiết cho một yêu cầu xác nhận chấm công hoặc tiền lương chưa được giải quyết, nghĩa vụ pháp lý hoặc yêu cầu khác theo pháp luật hiện hành. Khi ảnh bị xóa, ảnh sẽ không còn khả dụng đối với người dùng hoặc quản trị viên tổ chức thông qua ứng dụng ANT Tiko hoặc hệ thống quản trị.

Liên hệ: Đối với các câu hỏi hoặc yêu cầu liên quan đến ảnh chấm công và dữ liệu cá nhân, vui lòng liên hệ qua email: supports.antjsc@gmail.com.`
        },
        {
            title: '8. Thay đổi chính sách',
            content: 'Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. Mọi thay đổi quan trọng sẽ được thông báo qua email hoặc thông báo trên website. Chúng tôi khuyến khích bạn thường xuyên xem lại chính sách này để cập nhật thông tin mới nhất. Ngày cập nhật cuối cùng sẽ được ghi rõ tại đầu trang.'
        },
        {
            title: '9. Liên hệ',
            content: 'Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, vui lòng liên hệ với chúng tôi qua email: supports.antjsc@gmail.com hoặc số điện thoại: (84) 88 6929 185. Chúng tôi sẽ phản hồi trong vòng 24-48 giờ làm việc.'
        }
    ];

    lastUpdated = 'Ngày 09 tháng 01 năm 2026';
}
