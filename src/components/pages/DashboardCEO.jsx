import { useEffect } from 'react'
import { ResponsiveContainer, BarChart, Legend, Tooltip, CartesianGrid, Bar, XAxis, YAxis, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import styles from './DashboardCFO.module.css'

// ----- gráfico 1 -----
const chart1Data = [
    { "name": "Janeiro", "Receita": 1200, "Lucro": 800 },
    { "name": "Fevereiro", "Receita": 1000, "Lucro": 700 },
    { "name": "Março", "Receita": 1300, "Lucro": 950 },
    { "name": "Abril", "Receita": 1600, "Lucro": 1100 },
]

// ----- gráfico 2 -----
const chart2Data = [
    { "name": "Produto", "value": 45 },
    { "name": "Desconto", "value": 35 },
    { "name": "Cashback", "value": 20 },
]

// ----- gráfico 3 -----
const chart3Data = [
    { "name": "Norte", "value": 300 },
    { "name": "Sul", "value": 600 },
    { "name": "Leste", "value": 400 },
    { "name": "Oeste", "value": 700 },
]

function DashboardCEO() {
    useEffect(() => {
        document.documentElement.style.setProperty("--bg-color", "rgba(255, 255, 255, 1)");
        document.documentElement.style.setProperty("--container-background-color", "rgba(228, 228, 228, 1)");
    }, []);

    function money(value) {
        if (value >= 1000000) {
            return "R$ " + (value / 1000000).toFixed(1) + " mi";
        }
        return "R$ " + value.toLocaleString('pt-BR');
    }

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.containerTitle}>
                    Visão Geral da Empresa
                </div>

                <div style={{ display: "flex" }}>
                    <div className={styles.containerBigDataBalance}>
                        Receita Total
                        <div style={{ backgroundColor: "green" }}>
                            R$ 5.600.000,00
                        </div>
                    </div>
                    <div className={styles.containerBigDataBalance}>
                        Lucro
                        <div style={{ backgroundColor: "rgba(0, 140, 196, 1)" }}>
                            R$ 3.200.000,00
                        </div>
                    </div>
                    <div className={styles.containerBigDataBalance}>
                        Crescimento
                        <div style={{ backgroundColor: "goldenrod" }}>
                            +12,5%
                        </div>
                    </div>
                    <div className={styles.containerBigDataBalance}>
                        Status
                        <div>
                            SAUDÁVEL
                        </div>
                    </div>
                </div>

                {/* ----- gráfico 1: Receita x Lucro ----- */}
                <div className={styles.containerCharts}>
                    <div className={styles.containerChart}>
                        <div className={styles.containerChartTitle}>Receita e Lucro Mensal</div>
                        <ResponsiveContainer height="300px" width="100%" aspect={2}>
                            <BarChart data={chart1Data} barCategoryGap="30%" barSize={50} margin={{ top: 20, left: 20, right: 20 }}>
                                <CartesianGrid strokeDasharray="4 1 2"></CartesianGrid>
                                <XAxis dataKey="name"></XAxis>
                                <YAxis tickFormatter={money}></YAxis>
                                <Tooltip formatter={(v) => money(v)}></Tooltip>
                                <Legend />
                                <Bar dataKey="Receita" fill="green" />
                                <Bar dataKey="Lucro" fill="rgba(0, 140, 196, 1)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* ----- gráfico 2: Distribuição de Cupons ----- */}
                    <div className={styles.containerChart}>
                        <div className={styles.containerChartTitle}>Tipos de Cupons Utilizados</div>
                        <ResponsiveContainer height="300px" width="100%" aspect={2}>
                            <PieChart>
                                <Pie data={chart2Data} dataKey="value" nameKey="name" outerRadius={100}>
                                    <Cell fill="green" />
                                    <Cell fill="rgba(0,140,196,1)" />
                                    <Cell fill="goldenrod" />
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* ----- gráfico 3: Receita por Região ----- */}
                    <div className={styles.containerChart}>
                        <div className={styles.containerChartTitle}>Receita por Região</div>
                        <ResponsiveContainer height="300px" width="100%" aspect={2}>
                            <LineChart data={chart3Data}>
                                <CartesianGrid strokeDasharray="4 1 2"></CartesianGrid>
                                <XAxis dataKey="name"></XAxis>
                                <YAxis tickFormatter={money}></YAxis>
                                <Tooltip formatter={(v) => money(v)}></Tooltip>
                                <Legend />
                                <Line type="monotone" dataKey="value" stroke="purple" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* ----- seção de filtros simples ----- */}
            <div className={styles.page}>
                <div className={styles.containerTitle}>
                    Filtros e Indicadores
                </div>
                <div className={styles.containerSelectBox}>
                    <div>
                        <div>Período</div>
                        <select>
                            <option>Últimos 7 dias</option>
                            <option>Últimos 30 dias</option>
                            <option>Últimos 90 dias</option>
                        </select>
                    </div>
                    <div>
                        <div>Região</div>
                        <select>
                            <option>Todos</option>
                            <option>Norte</option>
                            <option>Sul</option>
                            <option>Leste</option>
                            <option>Oeste</option>
                        </select>
                    </div>
                    <div>
                        <div>Categoria</div>
                        <select>
                            <option>Todas</option>
                            <option>Produto</option>
                            <option>Desconto</option>
                            <option>Cashback</option>
                        </select>
                    </div>
                </div>

                {/* ----- KPIs extras ----- */}
                <div className={styles.KPIs}>
                    <div className={styles.bgComponent + " " + styles.bigData}>
                        <div style={{ padding: "30px" }}>
                            <div className={styles.bigDataNumber}>89%</div>
                            <div>Satisfação dos Clientes</div>
                        </div>
                    </div>
                    <div className={styles.bgComponent + " " + styles.bigData}>
                        <div style={{ padding: "30px" }}>
                            <div className={styles.bigDataNumber}>75%</div>
                            <div>Conversão de Cupons</div>
                        </div>
                    </div>
                    <div className={styles.bgComponent + " " + styles.bigData}>
                        <div style={{ padding: "30px" }}>
                            <div className={styles.bigDataNumber}>22%</div>
                            <div>Reinvestimento</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCEO
