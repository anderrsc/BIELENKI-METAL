# Escopo funcional — Bielenki Metal ERP

## Dashboard
Leads hoje/mês, pendentes, propostas em elaboração/enviadas/aprovadas/perdidas, taxa de conversão, pedidos em produção/atrasados, contas a pagar/receber, fluxo de caixa, margem estimada. Tudo calculado de registros reais, com filtros e fuso.

## CRM
Clientes PF/PJ, contatos, endereços, origem do lead, serviço, anexos, responsáveis, atividades, tarefas, pipeline: novo > atendimento > informações > medição > orçamento > negociação > aprovado/perdido > pós-venda. Deduplicar telefone normalizado com revisão humana em casos ambíguos.

## WhatsApp e IA
Cloud API oficial Meta, validação de webhooks, idempotência, inbox compartilhada, atribuição de atendente, histórico, mídias, sugestões, resumo e automação com liga/desliga. Começar envio automático desligado. Respeitar templates, janelas e políticas da Meta. IA classifica serviços, coleta dados, cria tarefas, consulta métricas por ferramentas de leitura autorizadas; nunca inventa preço, prazo, pagamento ou status fiscal.

## Orçamentos
Ver `ORCAMENTOS-OFICIAIS.md`. Editor rápido no celular, PDF A4, versionamento, envio WhatsApp/e-mail, aprovação e conversão em pedido sem duplicidade.

## Pedidos/produção
Orçamento aprovado, pedido, projeto, arquivos, materiais, responsáveis, prazo, etapas: medição > projeto > compras > fabricação > acabamento > instalação > inspeção > entregue. Kanban, checklists, fotos e agenda.

## Compras/estoque
Fornecedores, solicitações, cotações, pedidos de compra, recebimentos, matérias-primas, reservas, saldos, perdas, mínimo, movimentações transacionais e vinculação a obras.

## Financeiro
Contas a pagar/receber, parcelas, pagamentos parciais, conciliação, centros de custo, despesas, fluxo projetado/realizado, margem por obra. Diferenciar venda, faturamento, caixa e lucro. Estornos auditáveis.

## Fiscal
NF-e/NFS-e conforme operação e regime tributário validado por contador; provedor fiscal com homologação, consulta, autorização real, rejeições, eventos, cancelamento quando permitido, XML/PDF, idempotência, logs e exportação contábil. Não simular autorização.

## Usuários e segurança
Admin, gestão, comercial, financeiro, produção, compras, fiscal e consulta; RBAC no servidor + RLS, arquivos privados, trilhas de auditoria, backups, LGPD, gestão de segredos.

## Relatórios e notificações
Leads por origem, propostas, vendas, pedidos, estoque, fluxo de caixa, fiscal; alertas de orçamento sem retorno, pedido atrasado, parcela vencendo, estoque mínimo e nota rejeitada.
