# Instruções permanentes para agentes de código — Bielenki Metal ERP

- Antes de modificar código, leia README.md e todos os arquivos de docs/.
- Respeite identidade oficial: usar logos de references/brand-extracted/LOGO, cores verificadas #16232A e #E28B2E; não usar vermelho como cor primária. Outros tokens são sugestões, não cores oficiais verificadas.
- PDFs comerciais devem reproduzir `references/proposals/Orcamento_Bielenki_Telhado_Fabiane.pdf` e `references/proposals/LS MODULARES - Proposta Reparos  .pdf`, incluindo layout, escopo, materiais, pagamento e rodapé.
- Não alegue que uma função está pronta se não houver persistência, autorização, testes e tratamento de erros.
- Nunca exponha chaves, tokens ou certificados no frontend. Integrações externas só são reais após configuração e teste.
- Use migrations versionadas, validação de inputs, controle de acesso por função e RLS.
- Use DECIMAL/NUMERIC para dinheiro, timestamps UTC e apresentação America/Sao_Paulo.
- Não usar dados de demonstração como dados reais; nunca inventar métricas no dashboard.
- IA não pode alterar preços, autorizar descontos, pagamentos ou emitir/cancelar notas sem autorização humana.
- Antes de cada fase, liste arquivos alterados, testes e pendências. Rode `npm run build` e testes pertinentes.
- Implementar incrementalmente; priorizar CRM + orçamentos antes de fiscal e automações.
