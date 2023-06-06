- `POST /api/users` - Create a new user.

- `GET /api/users` - Retrieve a list of all users.

- `GET /api/users/:id` - Retrieve a single user by their ID.

- `PUT /api/users/:id` - Update a single user by their ID.

- `DELETE /api/users/:id` - Delete a single user by their ID.

- `POST /api/login` - Authenticate a user and generate a JWT token.

- `POST /api/logout` - Clear cookies and log out user.

- `POST /api/forgotPassword` - Authenticate a user and generate a JWT token.

- `POST /api/reset-password/confirmOtp` - OTP confirmation.

- `POST /api/reset-password` - Reset user password.

- `POST /api/categories` - Create a new category.

- `GET /api/categories` - Retrieve a list of all categories.

- `GET /api/categories/:id` - Retrieve a single category by its ID.

- `PUT /api/categories/:id` - Update a single category by its ID.

- `DELETE /api/categories/:id` - Delete a single category by its ID.

- `POST /api/topics` - Create a new topic.

- `GET /api/topics` - Retrieve a list of all topics.

- `GET /api/topics/:id` - Retrieve a single topic by its ID.

- `PUT /api/topics/:id` - Update a single topic by its ID.

- `DELETE /api/topics/:id` - Delete a single topic by its ID.

- `POST /api/courses` - Create a new course.

- `GET /api/courses` - Retrieve a list of all courses.

- `GET /api/courses/:id` - Retrieve a single course by its ID.

- `PUT /api/courses/:id` - Update a single course by its ID.

- `DELETE /api/courses/:id` - Delete a single course by its ID.

- `POST /api/courses/content` - Create a new course content.

- `GET /api/courses/content/:Courseid` - Retrieve a course content by course ID.

- `PUT /api/courses/content/:Courseid` - Update a course content by course ID.

```json
{
  "content": [
    {
      "lesson_note": "Investigating career cybercriminals is hard, especially when their paranoia has fostered strong OpSec? The FBI and Symantec spent 10 years investigating such a gang eventually finding cracks just large enough to end the gangs crime spree. This case study will show how to investigate when strong OpSec exists.Pre-Requisites: General knowledge of cyber crimes investigations, minimal traffic analysis and malware analysis.",
      "thumbnail_url": "https://static.wixstatic.com/media/3beaca_bfcfe182350d4f95be35bd934a7f42b5~mv2.png/v1/fit/w_940%2Ch_788%2Cal_c%2Cq_80,enc_auto/file.jpg",
      "title": "When Cybercriminals with Good OpSec Attack",
      "video_url": "https://www.youtube.com/watch?v=zXmZnU2GdVk"
    },
    {
      "lesson_note": "Yesterday’s tools barely help us today—and they won’t help us tomorrow. Slow, static security solutions like SIEM never solved SecOps challenges and can no longer carry us to the future. Through the power of automation and intelligence, we’ve ushered in a new era of cybersecurity. For the cyber industry, the revolution has finally arrived. Let’s build momentum and continue our great leap forward.",
      "thumbnail_url": "https://static.wixstatic.com/media/3beaca_bfcfe182350d4f95be35bd934a7f42b5~mv2.png/v1/fit/w_940%2Ch_788%2Cal_c%2Cq_80,enc_auto/file.jpg",
      "title": "SIEM There, Done That: Rising Up in the SecOps Revolution",
      "video_url": "https://www.youtube.com/watch?v=SD_m0wZKdkk"
    }
  ],
  "course_id": "6002d1c7777655267ca1fd79",
  "lesson_count": "2"
}
```

HTTPie example:

```sh
http POST :8000/api/courses/content \
course_id=6002d1c7777655267ca1fd79 \
  lesson_count=2 \
  content:='[{"title":"When Cybercriminals with Good OpSec Attack", "video_url":"https://www.youtube.com/watch?v=zXmZnU2GdVk", "thumbnail_url":"https://static.wixstatic.com/media/3beaca_bfcfe182350d4f95be35bd934a7f42b5~mv2.png/v1/fit/w_940%2Ch_788%2Cal_c%2Cq_80,enc_auto/file.jpg", "lesson_note":"Investigating career cybercriminals is hard, especially when their paranoia has fostered strong OpSec? The FBI and Symantec spent 10 years investigating such a gang eventually finding cracks just large enough to end the gangs crime spree. This case study will show how to investigate when strong OpSec exists.Pre-Requisites: General knowledge of cyber crimes investigations, minimal traffic analysis and malware analysis."}, {"title":"SIEM There, Done That: Rising Up in the SecOps Revolution", "video_url":"https://www.youtube.com/watch?v=SD_m0wZKdkk", "thumbnail_url":"https://static.wixstatic.com/media/3beaca_bfcfe182350d4f95be35bd934a7f42b5~mv2.png/v1/fit/w_940%2Ch_788%2Cal_c%2Cq_80,enc_auto/file.jpg", "lesson_note":"Yesterday’s tools barely help us today—and they won’t help us tomorrow. Slow, static security solutions like SIEM never solved SecOps challenges and can no longer carry us to the future. Through the power of automation and intelligence, we’ve ushered in a new era of cybersecurity. For the cyber industry, the revolution has finally arrived. Let’s build momentum and continue our great leap forward."}]'
```

- `POST /api/lecturers` - Create a new lecturer.

- `GET /api/lecturers` - Retrieve a list of all lecturers.

- `GET /api/lecturers/:id` - Retrieve a single lecturer by their ID.

- `PUT /api/lecturers/:id` - Update a single lecturer by their ID.

- `DELETE /api/lecturers/:id` - Delete a single lecturer by their ID.

- `POST /api/topweeks` - Create a new top week.

- `GET /api/topweeks` - Retrieve a list of all top weeks.

- `GET /api/topweeks/:id` - Retrieve a single top week by its ID.

- `PUT /api/topweeks/:id` - Update a single top week by its ID.

- `DELETE /api/topweeks/:id` - Delete a single top week by its ID.

- `POST /api/facebookusers` - Create a new Facebook user.

- `GET /api/facebookusers` - Retrieve a list of all Facebook users.

- `GET /api/facebookusers/:id` - Retrieve a single Facebook user by their ID.

- `PUT /api/facebookusers/:id` - Update a single Facebook user by their ID.

- `DELETE /api/facebookusers/:id` - Delete a single Facebook user by their ID.

- `POST /api/cart` - Create a new cart.

- `GET /api/cart/:id` - Retrieve a single cart by its ID.

- `PUT /api/cart/:id` - Update a single cart by its ID.

- `DELETE /api/cart/:id` - Delete a single cart by its ID.

- `GET /api/billings`: Returns an array of all billing objects in the database.

- `POST /api/billings`: Creates a new billing object in the database.

- `GET /api/billings/:id`: Returns the billing object with the specified ID. Support get billings by user_id (http GET :8000/api/billings user_id=646364b5aef83cf257fddddd)

- `PUT /api/billings/:id`: Updates the billing object with the specified ID.

- `DELETE /api/billings/:id`: Deletes the billing object with the specified ID.

- `POST /api/billings/purchase`: Purchases the specified billing object.If user_id already exists in billing collection -> update orders array. If not, create a new billing document and save to database. Send json object like the following example:

```json
{
  "email": "example@gmail.com",
  "orders": {
    "items": [
      {
        "course_id": "64621e807e8afdc6899cecf8",
        "course_name": "Course 1",
        "course_price": 9.99
      },
      {
        "course_id": "64621e807e8afdc6899cecf9",
        "course_name": "Course 2",
        "course_price": 19.99
      }
    ],
    "payment_method": {
      "card_number": "1234567890",
      "expiration_date": "12/23",
      "security_code": 123,
      "type": "credit_card"
    }
  },
  "user_id": "646364b5aef93cf257f8dddd",
  "user_name": "Phuc Hoang"
}
```

HTTPie example:

```sh
http POST http://localhost:8000/api/billings/purchase \
user_id=645c4faf42558eb2b718900d \
user_name="a b" \
email="20520412@gm.uit.edu.vn" \
orders[payment_method]:='{"type": "credit_card", "card_number": "1234567890", "expiration_date": "12/23", "security_code": 123}' \
orders[items]:='[{"course_id": "5ff2e3b37d305e09608a1deb", "course_name": "Course 1", "course_price": 9.99}, {"course_id": "5ff2e3b37d305e09608a1de6", "course_name": "Course 2", "course_price": 19.99}]'
```

- `GET /api/users/:id/purchased` - Get a list of user's purchased courses.
