# Bielenki Metal ERP

Projeto inicial para Codex + GitHub + Next.js + TypeScript + Supabase. Contém uma interface inicial executável, documentos de requisitos, ativos oficiais e os dois PDFs de referência.

## Começar
1. Instale Node.js 20.9+ e abra esta pasta no VS Code/Codex.
2. Execute `npm install` e `npm run dev`.
3. Acesse http://localhost:3000.
4. Copie `.env.example` para `.env.local` e configure as credenciais quando estiver pronto para integrar serviços.
5. Leia `AGENTS.md` e `docs/PLANO-DE-IMPLEMENTACAO.md` antes de implementar funcionalidades.

**Estado real:** o dashboard é uma interface inicial, sem dados simulados e sem backend conectado. Módulos comerciais, financeiros, WhatsApp e fiscal são especificações de desenvolvimento, NÃO funcionalidades prontas. Os arquivos originais da marca e os PDFs estão em `references/`.

## Documentos
- `docs/REQUISITOS-ERP.md`: escopo funcional completo
- `docs/ORCAMENTOS-OFICIAIS.md`: reprodução dos PDFs
- `docs/IDENTIDADE-VISUAL.md`: regras da marca
- `docs/ARQUITETURA-E-DADOS.md`: arquitetura e modelo relacional
- `docs/PLANO-DE-IMPLEMENTACAO.md`: entregas, testes e critérios
- `docs/PROMPT-INICIAL-CODEX.md`: primeiro comando para Codex

## Segurança
Nunca commitar `.env.local`, certificados, tokens ou dados de clientes. Validar regime fiscal com contador e credenciais do WhatsApp com a Meta.

## Execução neste Windows
Os comandos de desenvolvimento e build usam `scripts/next.mjs`, que seleciona o compilador WebAssembly quando o Windows bloqueia o binário nativo do Next.js. O fallback usa uma variável interna do Next.js e deve ser revalidado ao atualizar a versão. O Tailwind usa a versão 3 com configuração explícita para evitar dependência de compiladores nativos de estilos.

Esta preparação não conecta serviços externos nem implementa os módulos planejados. O próximo passo de desenvolvimento é autenticação e CRM com persistência e permissões no Supabase.
