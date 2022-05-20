# Install 
1. git clone <git url>
2. ``` cp .env.example .env ```
3. ``` docker-compose up -d ```
4. Access web at localhost:3001
5. Access PhpMyadmin at localhost:8081
    User: root 
    Pass: root

# Steps to upload code:
1. git add .
2. git commit -m "message"
3. git push origin <branch_name>


# Code ở nhánh con: 
1. vào VSCode, dùng lệnh: git checkout -b new_branch (new_branch là cái tên nhánh, đặt tên sao cho dễ hiểu)
2. Trước khi code nhớ kiểm tra xem mình đang ở nhánh nào, nếu đang ở nhánh main thì switch sang nhánh con
3. code xong thì upload như hướng dẫn phía trên, riêng chỗ push thì push như này: git push origin tên_nhánh_con
