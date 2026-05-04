# 🔒 Configuração de Variáveis de Ambiente

## Sobre Segurança

As credenciais do EmailJS e emails foram movidas para variáveis de ambiente por segurança. O arquivo `.env` contém dados sensíveis e **não é commitado** para o repositório.

## 📋 Setup Rápido

### 1. Criar arquivo `.env` local

Na raiz do projeto (`LaddingPage/`), crie um arquivo `.env`:

```bash
VITE_EMAILJS_PUBLIC_KEY=cwd1aL47Nan6fXbht
VITE_EMAILJS_SERVICE_ID=service_d57y0zm
VITE_EMAILJS_TEMPLATE_ID=template_95utmwh
VITE_CONTACT_EMAIL=maxwellcmoura@gmail.com
```

### 2. Arquivo `.env.example`

O repositório contém `.env.example` como referência. **Nunca commite o `.env` real**.

## 🔐 Variáveis Disponíveis

| Variável | Descrição | Obter em |
|----------|-----------|----------|
| `VITE_EMAILJS_PUBLIC_KEY` | Chave pública do EmailJS | Dashboard → Account → General |
| `VITE_EMAILJS_SERVICE_ID` | ID do serviço de email | Dashboard → Email Services |
| `VITE_EMAILJS_TEMPLATE_ID` | ID do template | Dashboard → Email Templates |
| `VITE_CONTACT_EMAIL` | Email para receber contatos | Seu email |

## ✅ Verificação de Segurança

- ✅ `.env` adicionado ao `.gitignore`
- ✅ Credenciais não estão hardcoded no código
- ✅ Arquivo `.env.example` como documentação
- ✅ Comentários desnecessários removidos
- ✅ Nenhuma chave exposta no repositório público

## 🚀 Para Desenvolvimento

1. Clone o repositório
2. Crie arquivo `.env` na raiz
3. Copie valores de `.env.example` e preencha com suas credenciais
4. Execute `npm install` e `npm run dev`

## ⚠️ Importante

**NUNCA commite seu arquivo `.env`!** Ele está no `.gitignore`, mas sempre verifique antes de fazer push.

```bash
# Verificar antes de commitar
git status  # .env NÃO deve aparecer aqui
git diff    # Credenciais NÃO devem aparecer
```

## 📚 Referências

- [Vite - Variáveis de Ambiente](https://vitejs.dev/guide/env-and-mode.html)
- [EmailJS - Documentação](https://www.emailjs.com/docs/)
