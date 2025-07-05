# Nagiyu Template

## 使い方

### GitHub
- Settings -> General -> Pull Requests -> Automatically delete head branches: ON
- Settings -> Rules -> Rulesets: Import
- Settings -> Actions -> Workflow permissions
  - Read and write permissions: ON
  - Allow GitHub Actions to create and approve pull requests: ON
- Settings -> Secrets and variables -> Actions
  - Repository secrets
    - AWS_ACCESS_KEY
    - AWS_SECRET_ACCESS_KEY
    - AWS_REGION
    - LLM_API_KEY
    - PAT_TOKEN
    - PAT_USERNAME
  - Repository variables
    - LLM_MODEL: openai/gpt-4.1-mini
    - TARGET_BRANCH: develop or master

### パス生成
```bash
web-push generate-vapid-keys
```

### AWS
- Elastic Container Registry
- Lambda
- Secrets Manager

#### Lambda
- メモリ: 128 MB
- エフェメラルストレージ: 512 MB
- タイムアウト (e.g. 3分)
- 関数URL: ON
- アクセス権限: SecretsManagerReadWrite

#### Secrets Manager
- CLIENT_PROJECT_NAME (e.g. nextjs-base)
- CLIENT_BASE_URL
- VAPID_PUBLIC_KEY
- VAPID_PRIVATE_KEY
- VAPID_SUBJECT (e.g. admin@sample.comt)
- AWS_ACCESS_KEY (for Local)
- AWS_SECRET_ACCESS_KEY (for Local)
- AWS_REGION
