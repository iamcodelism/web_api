# Web And API
### Login ECR
```bash
aws ecr 
```
### To build API Docker image
```bash
cd api
docker build -t api .
```
### Push WEB Docker Image to ECR
```bash
docker tag web:latest web:latest
docker push web:latest
```

### To build WEB Docker image
```bash
cd web
docker build --build-arg NEXT_PUBLIC_API_ENDPOINT=your_own_api_endpoint -t web .
```

### Push web Docker Image to ECR
```bash
docker tag web:latest web:latest
docker push web:latest
```