# Static Website File Uploader using EC2 and S3

This project allows users to upload files from a static website hosted on an AWS EC2 instance to an S3 bucket using a simple HTML and JavaScript frontend.

---

## 🧰 Tech Stack

- **Amazon EC2** – for hosting the frontend
- **Amazon S3** – for file storage
- **HTML/CSS** – user interface
- **JavaScript (AWS SDK v2)** – handles file upload to S3

---

## 🚀 How to Use

1. Open the website in your browser via EC2 Public IP.
2. Select any file using the form.
3. Click the **Upload** button.
4. The file will be uploaded directly to the configured S3 bucket.

---

## ⚙️ AWS Configuration

- **Bucket Name**: `mybucketsarat`
- **Region**: `eu-north-1`
- **CORS**: Configured to allow POST, PUT, GET from all origins.
- **IAM Policy**: User credentials allow `s3:PutObject`, `s3:GetObject`, and `s3:GetBucketLocation`.

---

## 📁 Project Structure

uploader-project/
├── index.html # Upload form (frontend)
├── upload.js # AWS S3 upload logic
├── README.md # Project documentation
