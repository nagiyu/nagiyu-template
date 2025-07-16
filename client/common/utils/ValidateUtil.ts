export default class ValidateUtil {
  /**
   * Validate a single field based on field name and value
   */
  public validateField(field: string, value: string | number): string {
    switch (field) {
      case 'title':
        if (!value || String(value).trim() === '') {
          return 'タイトルは必須です';
        }
        break;
      case 'email':
        if (!value || String(value).trim() === '') {
          return 'メールアドレスは必須です';
        }
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(String(value))) {
          return '有効なメールアドレスを入力してください';
        }
        break;
      case 'password':
        if (!value || String(value).trim() === '') {
          return 'パスワードは必須です';
        }
        break;
      case 'count':
        const num = Number(value);
        if (!value || isNaN(num)) {
          return 'カウントは必須です';
        }
        // Note: max count validation needs to be handled separately as it's context-dependent
        if (num < 1) {
          return 'カウントは1以上である必要があります';
        }
        break;
    }
    return '';
  }
}