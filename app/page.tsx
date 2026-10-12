import Image from "next/image";

const modules: [nome: string, status: string, descricao: string][] = [
  ["CRM e leads", "A implementar", "Contatos, funil e histórico"],
  ["Orçamentos", "A implementar", "Editor e PDFs oficiais"],
  ["Pedidos e produção", "A implementar", "Etapas, materiais e instalação"],
  ["Financeiro", "A implementar", "Contas e fluxo de caixa"],
  ["WhatsApp e IA", "A integrar", "Canal oficial e relatórios"],
  ["Fiscal", "A integrar", "NF-e / NFS-e conforme operação"],
];

export default function Home() {
  return (
    <main className="min-h-screen md:flex">
      <aside className="bg-[#16232A] p-6 md:w-64 border-b md:border-b-0 md:border-r border-white/10">
        <div className="flex items-center gap-3 mb-9">
          <Image src="/brand-logo.svg" width={148} height={54} alt="Bielenki Metal" unoptimized />
        </div>
        <div className="text-xs uppercase tracking-widest text-[#E28B2E] mb-4">Navegação</div>
        <nav className="space-y-3 text-sm text-slate-300">
          <div className="text-white font-bold">Visão geral</div>
          {modules.map(([nome]) => (
            <div key={nome} className="opacity-70">
              {nome}
            </div>
          ))}
        </nav>
      </aside>
      <section className="flex-1 p-5 md:p-10 max-w-7xl">
        <div className="flex flex-wrap justify-between gap-4 items-start mb-8">
          <div>
            <div className="text-[#E28B2E] text-xs font-bold tracking-widest mb-2">BIELENKI METAL ERP</div>
            <h1 className="text-3xl md:text-4xl font-bold">Painel de gestão</h1>
            <p className="text-slate-400 mt-2">Estrutura inicial do projeto. Nenhum dado empresarial foi conectado.</p>
          </div>
          <span className="bg-[#203039] border border-[#E28B2E]/50 text-[#E28B2E] text-xs px-3 py-2 rounded-lg">
            Ambiente inicial
          </span>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {modules.map(([nome, status, descricao]) => (
            <article key={nome} className="rounded-xl border border-white/10 bg-[#16232A] p-6">
              <div className="flex justify-between gap-3 items-center">
                <h2 className="font-bold">{nome}</h2>
                <span className="text-[10px] text-[#E28B2E]">{status}</span>
              </div>
              <p className="text-sm text-slate-400 mt-3">{descricao}</p>
            </article>
          ))}
        </div>
        <section className="mt-8 rounded-xl border border-white/10 bg-[#16232A] p-6">
          <h2 className="font-bold text-lg">Primeira entrega</h2>
          <p className="text-slate-300 mt-2">
            Conectar Supabase, autenticação e CRM. Em seguida construir o editor de orçamentos com fidelidade aos PDFs
            oficiais incluídos em <code className="text-[#E28B2E]">references/proposals/</code>.
          </p>
        </section>
      </section>
    </main>
  );
}
