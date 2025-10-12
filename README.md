🚀  Serverless REST API with AWS — Backend

This repository contains the serverless backend for a full-stack CRUD application built using AWS Lambda, API Gateway, DynamoDB, and AWS Cognito, with automated deployments via GitHub Actions and Infrastructure as Code using the Serverless Framework.

The backend connects to a separate React (Next.js) frontend hosted in another repository, completing the full-stack solution.

🧩 Project Overview

This project implements a secure, scalable, and fully automated serverless architecture that supports CRUD operations and user authentication.

🔧 Technologies Used

AWS Lambda — Compute for CRUD operations

Amazon API Gateway — REST API routing

Amazon DynamoDB — NoSQL database

AWS Cognito — Authentication & user management

Serverless Framework — Infrastructure as Code (IaC)

GitHub Actions — CI/CD automation

🏗️ Architecture Summary

Frontend: React (Next.js) hosted in a separate repository

Backend: Serverless Node.js stack using AWS services

Authentication: AWS Cognito with JWT-based login

Database: DynamoDB (Pay-per-request)

CI/CD: Automated GitHub Actions for dev and prod environments

Workflow:

User signs in via AWS Cognito.

Frontend sends authenticated API requests to API Gateway.

API Gateway triggers Lambda functions for CRUD operations.

DynamoDB stores and retrieves data.

⚙️ Backend Functionalities

Create Item — POST /items

Read Item — GET /items/{id}

List Items — GET /items

Update Item — PUT /items/{id}

Delete Item — DELETE /items/{id}

All endpoints are secured and support CORS for communication with the frontend.

🔄 CI/CD Deployment Pipeline

The project uses GitHub Actions for continuous deployment.
Whenever code is pushed to the dev branch, it automatically deploys to AWS for development stage.
Whenever code is pushed to the dev master, it automatically deploys to AWS for production stage.

✅ Multi-Stage Deployment:

dev — for testing environment

prod — for production environment

✅ Automated:

Code checkout

Dependency installation

Packaging

Serverless deployment

🧱 Infrastructure as Code (IaC)

All AWS resources — including Lambda functions, API Gateway, DynamoDB tables, and IAM roles — are defined declaratively using Serverless Framework, ensuring a reproducible and automated infrastructure setup.

🔐 Authentication Integration (AWS Cognito)

User authentication is handled via AWS Cognito User Pool.

Supports email-based sign-up & login.

User accounts can be manually confirmed or auto-verified.

The frontend uses Cognito tokens for secure communication with the backend.

🧠 Frontend Integration

This backend connects to a React (Next.js) frontend hosted in a separate repository:
👉 Frontend Repository: serverless-frontend

The frontend consumes all CRUD endpoints and uses AWS Cognito for authentication.

💻 Commands to Run and Deploy
🏗️ Install dependencies
npm install

🚀 Deploy to AWS (Development)
npx serverless deploy --stage dev

🚀 Deploy to AWS (Production)
npx serverless deploy --stage prod

🧹 Remove all resources
npx serverless remove

✅ Features Checklist
Feature	Status
Serverless CRUD API	✅
AWS Cognito Authentication	✅
Infrastructure as Code	✅
Multi-Stage Deployments	✅
CI/CD Pipeline	✅
Frontend Integration	✅
CORS Configuration	✅

👨‍💻 Author
Sami Ullah
Senior Full Stack Engineer
📧 samiullahrashid4@gmail.com


<img width="1918" height="807" alt="sls1" src="https://github.com/user-attachments/assets/2faf6965-813f-4a7a-a599-d77cbaad67e5" />
<img width="1918" height="782" alt="sls2" src="https://github.com/user-attachments/assets/b1976187-83cc-409f-b89f-c7b4371e3e8b" />
<img width="1917" height="840" alt="sls3" src="https://github.com/user-attachments/assets/7b3d8ac2-93b9-4807-bef4-4c81d8859a7b" />
<img width="1918" height="867" alt="sls4" src="https://github.com/user-attachments/assets/2d5188bd-3f53-41b5-8e1c-d855c515fd46" />
<img width="1917" height="848" alt="sls5" src="https://github.com/user-attachments/assets/3fd4e10b-7c90-4712-8e0a-bcaa716dc268" />
<img width="1917" height="873" alt="sls6" src="https://github.com/user-attachments/assets/43028b81-6085-4518-867d-d9d7b63778be" />

