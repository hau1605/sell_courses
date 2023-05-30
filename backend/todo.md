# Quy trình xác thực JWT
1 Client gửi password, email tới server nhằm để xác thực việc đăng nhập 
2 Nếu login thành công back-end sẽ tạo ra một generate a random String dạng json web token gửi về cho client 
3 Client nhận token đó, rồi lưu trữ ở đâu đó (cookies, storageSession..) 
4 Khi client muốn get data gì đó thì luôn gửi kèm token này lên cùng với http request. 
5 Server nhận được http request từ client thì check token này available hay không? Rồi cho đi tiếp, còn không chặn lại, và có thể report ip này. 