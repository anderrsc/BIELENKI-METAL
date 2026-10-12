# Plano incremental e critérios de aceite

## Fase 1 — Fundação
Identidade oficial, Next.js, autenticação Supabase, banco, RLS, papéis, layout desktop/mobile, logs. Aceite: login/logout, sessão, rotas protegidas, testes de permissão, build.

## Fase 2 — CRM e orçamentos
Clientes, leads, pipeline, catálogo, editor, cálculos, PDF visualmente fiel aos dois exemplos, versão imutável, envio e aprovação. Aceite: reproduzir valores/condições dos PDFs e gerar A4 correto; cálculos e persistência testados.

## Fase 3 — Pedidos, produção, compras e estoque
Conversão idempotente, Kanban, cronograma, reservas, movimentações e fornecedores. Aceite: pedido aprovado não duplica; estoque não é reservado duas vezes.

## Fase 4 — Financeiro
Títulos, parcelas, pagamentos parciais, estornos, fluxo de caixa e relatórios. Aceite: reconciliação de somas, saldos e vencimentos; testes de decimal.

## Fase 5 — WhatsApp oficial e IA
Cloud API, webhooks, inbox, IA com permissões, resumo diário e supervisão humana. Aceite: testes em ambiente autorizado, deduplicação, automação desativável, nenhuma mensagem enviada sem configuração.

## Fase 6 — Fiscal
Escolha de provedor, configuração contábil, homologação NF-e/NFS-e, autorização, rejeição, XML e eventos. Aceite: testes com provedor e status real; não declarar pronto sem credenciais/homologação.

## Fase 7 — Implantação
E2E desktop/mobile, segurança, backup/restauração, monitoramento, documentação e deploy.

Em cada fase: listar mudanças, testes rodados, erros, pendências e instruções. Nunca tratar interface sem backend como módulo pronto.
