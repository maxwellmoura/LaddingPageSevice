# 🚀 Deploy na Vercel - Configuração de Variáveis de Ambiente

## ❌ Erro Comum: "The public key is required"

Este erro ocorre quando você tenta usar o formulário de contato na Vercel sem configurar as variáveis de ambiente.

## ✅ Solução: Adicionar Variáveis na Vercel

### Passo 1: Acessar Configurações do Projeto

1. Vá para [vercel.com](https://vercel.com)
2. Encontre seu projeto `LaddingPageSevice`
3. Clique em **Settings**

### Passo 2: Adicionar Environment Variables

1. Na seção **Settings**, procure por **Environment Variables**
2. Clique em **Add**
3. Preencha as 4 variáveis:

```
Nome: VITE_EMAILJS_PUBLIC_KEY
Valor: cwd1aL47Nan6fXbht

---

Nome: VITE_EMAILJS_SERVICE_ID
Valor: service_d57y0zm

---

Nome: VITE_EMAILJS_TEMPLATE_ID
Valor: template_95utmwh

---

Nome: VITE_CONTACT_EMAIL
Valor: maxwellcmoura@gmail.com
```

### Passo 3: Confirmar e Redeploy

1. Após adicionar todas as 4 variáveis, salve
2. A Vercel pode pedir para fazer um **Redeploy**
3. Clique em **Redeploy** ou faça um novo push para GitHub

## 📋 Checklist

- [ ] Acessar Settings do projeto na Vercel
- [ ] Encontrar "Environment Variables"
- [ ] Adicionar as 4 variáveis listadas acima
- [ ] Clicar em "Save"
- [ ] Fazer Redeploy (ou novo push)
- [ ] Testar formulário no site publicado

## 🔍 Verificar se Funcionou

1. Vá para seu site na Vercel
2. Abra a seção "Entre em Contato"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Você deve ver a mensagem ✅ de sucesso
6. Verifique seu email!

## ⚠️ Importante

- **NUNCA** commite o arquivo `.env` com as credenciais reais
- Use `.env.example` como referência
- As variáveis na Vercel são seguras e privadas

## 🆘 Se Ainda Tiver Erro

1. Verifique se copiou as variáveis corretamente
2. Certifique-se que não há espaços extras
3. Faça um novo push para GitHub
4. Espere a Vercel fazer o redeploy automático (alguns minutos)
5. Limpe o cache do navegador (Ctrl+Shift+Del)

## 📚 Links Úteis

- [Documentação Vercel - Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [EmailJS - Documentação](https://www.emailjs.com/docs/)
- [Vite - Variáveis de Ambiente](https://vitejs.dev/guide/env-and-mode.html)
