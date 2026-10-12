# BIELENKI-METAL

ERP da Bielenki Metal (Next.js 15 + React 19 + Tailwind CSS 4).

Esta é a estrutura inicial: um painel com os módulos planejados. Nenhum dado empresarial está conectado ainda.

## Como rodar

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
```

Produção:

```bash
npm run build
npm start
```

## Estrutura

- `app/` páginas (App Router): `layout.tsx`, `page.tsx` (painel), `globals.css`
- `public/brand-logo.svg` logo horizontal laranja e branco, usado no menu escuro
- `docs/` escopo funcional, plano por fases e o prompt inicial do projeto
- `references/proposals/` os dois PDFs oficiais de orçamento que o editor deve reproduzir
- `references/brand/` variações do logo em SVG

## Próximos passos

Ver `docs/PLANO.md`. A Fase 1 é Supabase (autenticação, banco com RLS, papéis) e o CRM.
