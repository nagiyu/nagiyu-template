# Base

## 使い方
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

## Versions
Base: 1.0.0
