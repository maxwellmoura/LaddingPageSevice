# 📧 Configuração do EmailJS

O EmailJS foi implementado no formulário de contato. Agora você precisa configurar suas credenciais para que os emails sejam enviados corretamente.

## 📝 Passo 1: Criar Conta no EmailJS

1. Acesse: https://www.emailjs.com/
2. Clique em **Sign Up** e crie uma conta gratuita
3. Você receberá um email de confirmação

## 🔑 Passo 2: Obter as Credenciais

### a) PUBLIC_KEY
1. Acesse o Dashboard: https://dashboard.emailjs.com/
2. Vá para **Account** → **General**
3. Copie sua **Public Key**

### b) SERVICE_ID
1. No Dashboard, vá para **Email Services**
2. Clique em **Add Service** (ou use um serviço existente)
3. Selecione o provedor de email (Gmail, Outlook, etc.)
4. Complete a configuração
5. Copie o **Service ID**

### c) TEMPLATE_ID
1. Vá para **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com os seguintes campos:
   ```
   Assunto: {{subject}}
   Corpo da Mensagem:
   
   Nome: {{from_name}}
   Email: {{from_email}}
   Assunto: {{subject}}
   
   Mensagem:
   {{message}}
   ```
4. Copie o **Template ID**

## 🔧 Passo 3: Adicionar as Credenciais ao Projeto

No arquivo `src/components/Contact.jsx`, encontre estas linhas:

```javascript
// Linha ~16
emailjs.init('YOUR_PUBLIC_KEY_HERE')

// Linha ~35-40
await emailjs.send(
    'YOUR_SERVICE_ID_HERE',
    'YOUR_TEMPLATE_ID_HERE',
    {
        // ...
    }
)
```

E substitua:
- `YOUR_PUBLIC_KEY_HERE` → Sua PUBLIC_KEY
- `YOUR_SERVICE_ID_HERE` → Seu SERVICE_ID
- `YOUR_TEMPLATE_ID_HERE` → Seu TEMPLATE_ID

### Exemplo:
```javascript
emailjs.init('abc123xyz')

await emailjs.send(
    'service_abc123',
    'template_def456',
    {
        // ...
    }
)
```

## ✅ Passo 4: Testar

1. Execute `npm run dev`
2. Vá para a seção "Entre em Contato"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Você deve receber um email!

## 🛡️ Segurança

⚠️ **IMPORTANTE**: Sua PUBLIC_KEY é pública (aparece no código), mas é segura. O EMAIL_SERVICE_ID e TEMPLATE_ID também são públicos no código React (são vistos pelos usuários). 

Para maior segurança em produção, considere usar um backend para guardar o SERVICE_ID.

## 🎯 Resumo das Variáveis

| Variável | Onde Encontrar | Pública? |
|----------|---|---|
| PUBLIC_KEY | Dashboard → Account → General | ✅ Sim |
| SERVICE_ID | Dashboard → Email Services | ✅ Sim (no React) |
| TEMPLATE_ID | Dashboard → Email Templates | ✅ Sim (no React) |

## 🆘 Troubleshooting

**Erro: "Invalid Public Key"**
- Verifique se copiou corretamente
- Certifique-se que está na Dashboard certa

**Erro: "Invalid Service"**
- O SERVICE_ID pode estar incorreto
- Verifique se o serviço de email está ativo no Dashboard

**Formulário não envia**
- Abra o console (F12) para ver o erro exato
- Verifique se as 3 credenciais estão preenchidas

---

**Dúvidas?** Consulte a documentação oficial: https://www.emailjs.com/docs/
