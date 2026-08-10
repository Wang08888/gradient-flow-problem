# 辛平均曲率流第一类奇点及相关问题文献汇总

## 围绕 Chen-Li 定理 4.7 的直接结果、切锥、第二类模型与拉格朗日类比

**检索日期：** 2026-08-10  
**检索与核验：** Danus 多角色检索，辅以 arXiv 源文件、期刊页面、DOI 元数据及可访问的论文全文交叉核对  
**基准文献：** J. Chen and J. Li, *Mean Curvature Flow of Surface in 4-Manifolds*, Adv. Math. 163 (2001), 287-309, Theorem 4.7

---

## 摘要

本报告回答一个具体问题：除 Chen-Li 定理 4.7 外，哪些论文研究了辛曲面平均曲率流中第一类奇点、奇点切流、第二类爆破模型以及相邻的长期存在问题？检索显示，文献可分成四条互相关联但不能混同的路线：

1. **直接无第一类奇点定理。** Wang (2001) 对任意四维 Kähler-Einstein 背景给出独立结论；Li-Yang (2014)、Zhang (2015) 将同类结论放到正全纯截面曲率条件下；Qiu-Sun (2019/2020) 用复相位映射与自收缩子刚性，在超 Kähler 四维流形中得到新的无第一类奇点定理。
2. **切锥与第一类矛盾。** Chen-Li (2002) 证明第一爆破时刻的切锥是若干复二维实平面的有限并，并在 Remark 6.7 中由“极限平坦”与第一类归一化的非零曲率下界矛盾，重新导出无第一类奇点。
3. **第二类奇点模型。** Han-Li、Han-Li-Sun、Li-Sun 等研究爆破流、全纯曲线、平移孤子和永恒解的刚性。这些结果通常限制潜在第二类模型，但并不等价于原始紧致流的无第一类奇点定理。
4. **拉格朗日类比。** Chen-Li (2004)、Neves (2007) 以及后续工作发展了几乎标定或零 Maslov 类拉格朗日流的切锥和第二类模型理论。它们在方法上高度相关，但不是辛曲面定理的直接推广。

对当前仓库中的 `chen-li-theorem-4.7-rigorous-audit-zh.pdf` 最关键的审计结论是：**所检索到的后续论文中，没有发现一篇明确补上 Wang 路线中“浸入情形切流重数为一”这一特定步骤。** Chen-Li (2002) 反而允许奇点切锥为多平面有限并，并通过另一种曲率矛盾排除第一类奇点。因此，引用后续文献时应明确使用的是哪一条机制。

## 1. 口径与证据等级

本文使用下列术语。

- **直接结果：** 结论本身针对辛曲面平均曲率流，并明确涉及第一类奇点、切锥或爆破流。
- **后续相关：** 研究辛流的第二类模型、平移孤子、长期存在或相关梯度流，但不直接证明 Chen-Li 定理 4.7 的同一命题。
- **类比：** 拉格朗日或广义拉格朗日平均曲率流中的对应结论。
- **A 级核验：** 已核对可访问的论文全文或 arXiv 源文件中的定理编号与假设。
- **B 级核验：** 已核对期刊正式摘要、出版信息及 DOI，但全文定理文本在本次环境中不可访问；表中仅转述摘要支持的范围。

这里所说的第一类奇点采用通常的曲率条件

$$
  \sup_{\Sigma_t}|A|^2 \leq \frac{C}{T-t}, \qquad t<T.
$$

## 2. 直接研究第一类奇点与切锥的论文

| 年份 | 文献 | 核心结论及方法 | 与定理 4.7 的关系 / 核验 |
|---:|---|---|---|
| 2000 | Chen-Tian, *Moving Symplectic Curves in Kähler-Einstein Surfaces* [R1] | Theorem 2.4 给出 Kähler 角演化方程；Theorem 2.5 用抛物型极值原理证明辛性在光滑流期间保持。 | 关键先导工具，不是奇点排除定理。A |
| 2001 | Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds* [R3] | Theorem A：四维 Kähler-Einstein 流形中的辛曲面保持辛性，且不产生第一类奇点；论证使用 Kähler 角、Huisken 单调性、抛物缩放及正则性思路。 | 对 Chen-Li 的独立直接结果，并移除其非负标量曲率限制。A |
| 2002 | Chen-Li, *Singularities of Codimension Two Mean Curvature Flow of Symplectic Surfaces* [R4] | Theorems 1.2, 4.3, 5.1, 6.6：第一爆破时刻奇点的切锥是若干在某复结构下为复直线的实二维平面的有限并，并具有多重结构；Remark 6.7 以平坦极限和第一类曲率归一化矛盾排除第一类奇点。 | 是最接近原定理的后续切锥论文；它不依赖“重数必为一”的结论。A |
| 2014 | Li-Yang, *Symplectic Mean Curvature Flows in Kähler Surfaces with Positive Holomorphic Sectional Curvatures* [R12] | 在最大与最小全纯截面曲率比小于 2 及显式 Kähler 角下界下，保持角度下界；Theorem 1.3 按 Chen-Li/Wang 型论证排除第一类奇点。 | 将背景从 Kähler-Einstein 推广到一类正全纯截面曲率曲面。A |
| 2014 | Li-Yang, *Generalized Symplectic Mean Curvature Flows in Almost Einstein Surfaces* [R13] | 正式摘要声明：广义辛平均曲率流无第一类奇点；图像情形有长期存在与收敛。 | 对修改后流方程的推广，不是原始 MCF；本次只能按摘要范围引用。B |
| 2015 | Zhang, *Remarks on Symplectic Mean Curvature Flows...* [R14] | 改进 Li-Yang 的 Kähler 角下界；Theorem 3.2 在改进条件下排除第一类奇点，并给出长期存在/收敛细化。 | 正全纯截面曲率路线的定量改进；arXiv 有文本重合提示，引用时宜与 [R12] 并列说明。A |
| 2019 | Qiu-Sun, *Mean Curvature Flow of Surfaces in a Hyperkähler 4-Manifold* [R15] | Theorem 1.2：复相位像位于指定凸域的完备适当自收缩曲面必为平面；Theorem 1.3 由此证明相位像满足条件的闭浸入曲面流无第一类奇点。 | 真正的后续直接推广；机制是自收缩子刚性，不是重数一加 White 正则性。A |
| 2026 | Chen-Han-Li-Sun, *Tangent Flows of Symplectic Mean Curvature Flows* [R18] | 正式摘要：闭辛曲面在第一爆破时刻的切锥为有限个平面的并；若发生 Type I* 奇点，切锥是全纯锥。 | 最新直接切流研究；摘要不足以支持“一般无第一类奇点”或“重数一”结论。B |

## 3. 第二类奇点、爆破流和平移孤子

| 年份 | 文献 | 主要对象与结论 | 与第一类奇点问题的关系 / 核验 |
|---:|---|---|---|
| 2009 | Han-Li, *Singularities of Symplectic and Lagrangian Mean Curvature Flows* [R5] | Theorem 2.4：爆破流的每个单连通分支与时间无关，是 $\mathbb C^2$ 中全纯曲线，满足 $-2\le K\le0$ 且总曲率有限；Corollary 2.6 在单分支和连通性条件下给出非平凡全纯爆破模型。 | 描述无第一类之后可能出现的爆破结构；不是新的无第一类证明。A |
| 2009 | Han-Li, *Translating Solitons to Symplectic and Lagrangian Mean Curvature Flows* [R6] | 研究辛/拉格朗日平移孤子，并构造有限时曲率爆破例子。 | 说明第二类模型并非形式上的空集；聚焦平移孤子。A |
| 2011 | Han-Li-Sun, *The Second Type Singularities...* [R8] | Theorems 1.1-1.4 对具有二次面积增长、曲率归一化和正 Kähler 角下界的完备第二类极限给出均曲率估计；排除始终法丛平坦的辛极限流。 | 对第二类爆破模型给出定量障碍，不直接排除紧致原流的所有第二类奇点。A |
| 2024 | Li-Sun, *Eternal Solutions to Almost Calibrated Lagrangian and Symplectic Mean Curvature Flows* [R16] | 研究满足正 Kähler 角下界的辛永恒解，并给出平坦性/第二类爆破非实现条件。 | 最近的第二类刚性结果；本次按正式摘要与书目信息列为检索线索。B |

## 4. 长期存在、收敛及相邻辛流

| 年份 | 文献 | 主要结论 | 定位 / 核验 |
|---:|---|---|---|
| 2010 | Han-Li, *The Mean Curvature Flow Approach to the Symplectic Isotopy Problem* [R7] | 在正标量曲率 Kähler-Einstein 背景中，若初始辛曲面充分接近全纯曲线，则流长期存在并收敛到全纯曲线。 | 用定量小性把奇点排除推进到整体收敛。A |
| 2011 | Han-Li, *Long Time Existence of the Symplectic Mean Curvature Flow* [R9] | 在正常数全纯截面曲率背景中，两组显式曲率压缩和 Kähler 角条件保证长期存在并收敛到全纯曲线。 | arXiv 论文；未与其他出版项强行合并。A |
| 2013 | Han-Li-Yang, *Symplectic Mean Curvature Flow in $\mathbb{CP}^2$* [R10] | 在 $\mathbb{CP}^2$ 中以曲率压缩和角度条件建立长期存在及收敛。 | 特定背景下的整体理论。A/B：书目已核实，结论按正式摘要及关联原文核对。 |
| 2014 | Han-Li, *The Mean Curvature Flow Along the Kähler-Ricci Flow* [R11] | 建立 Kähler-Ricci 流与曲面 MCF 的耦合系统，推导角度演化并保持辛/拉格朗日条件。 | 背景度量同时演化，问题设置不同。A |
| 2024 | Han-Li-Sun, *Gradient Flow for $\beta$-Symplectic Critical Surfaces* [R17] | 对 $\beta$-辛临界泛函梯度流证明辛性保持、加权单调性、切锥为有限平面并，以及全纯曲线附近的整体存在/收敛；论文把排除该 $\beta$-流第一类奇点留作后续问题。 | 与仓库的 gradient-flow 主题直接相关，但不能当作普通 MCF 的新证明。A |

## 5. 方法上最接近的拉格朗日类比

| 年份 | 文献 | 核心结论 | 与辛问题的边界 / 核验 |
|---:|---|---|---|
| 2004 | Chen-Li, *Singularity of Mean Curvature Flow of Lagrangian Submanifolds* [L1] | 对 Calabi-Yau 流形中紧致几乎标定拉格朗日流，Theorem 1.1 描述平稳整数重数切锥；复维 2 时为有限复平面并；Corollary 6.7 排除有限时第一类奇点。 | 与辛曲面切锥路线最接近的类比，但对象是拉格朗日流。A |
| 2007 | Neves, *Singularities of Lagrangian Mean Curvature Flow: Zero-Maslov Class Case* [L2] | Theorems A-B：在零 Maslov、角度和面积条件下，缩放子列弱收敛到有限个特殊拉格朗日锥，且极限相位集合与缩放序列无关。 | 强化零 Maslov 切流结构；不把未见于原文的“编号无第一类推论”强加给论文。A |
| 2017 | Sun-Yang, *Generalized Lagrangian Mean Curvature Flows in Almost Calabi-Yau Manifolds* [L3] | 将 Neves 型特殊拉格朗日锥结论推广到广义 LMCF；Corollary 1.1 排除有限时第一类奇点。 | 广义拉格朗日直接类比。A |
| 2021 | Lambert-Lotay-Schulze, *Ancient Solutions in Lagrangian Mean Curvature Flow* [L4] | 分类具有横截两平面 blow-down 的精确几乎标定古老解；出现静态两平面或 Lawlor neck，并排除若干第二类 blow-down。 | 第二类模型分类，不是辛曲面定理。A |
| 2024 | Lotay-Schulze-Székelyhidi, *Ancient Solutions and Translators of Lagrangian Mean Curvature Flow* [L5] | 在面积比、角度振荡及两平面 blow-down 条件下，将零 Maslov 古老 Brakke 流识别为平移孤子。 | 现代古老解/平移孤子刚性。A |
| 2025 | Li-Luo-Sun, *Type II Singularities of Lagrangian Mean Curvature Flow with Zero Maslov Class* [L6] | 给出零 Maslov 古老流均曲率估计，并排除若干几乎标定永恒流及平移孤子作为第二类爆破极限。 | 最近两年的第二类类比，非直接辛结果。A |

## 6. 证明机制比较

| 机制 | 典型输入 | 得到的关键结论 | 代表文献 |
|---|---|---|---|
| Kähler 角极值原理 | $\cos\alpha>0$ 及其抛物演化方程 | 光滑期间保持辛性；为加权单调性提供正下界 | [R1], [R2], [R3] |
| 加权 Huisken 单调性 | 后向热核、$1/\cos\alpha$ 型权函数及误差控制 | 缩放极限中均曲率/角度缺陷消失，产生平坦或全纯切锥 | [R2], [R4], [R8] |
| 第一类归一化反证 | $|A|^2\le C/(T-t)$ 与选点后的非零曲率归一化 | 极限一方面平坦，另一方面在基点保持非零曲率，矛盾 | [R4], [L1] |
| 自收缩子刚性 | 第一类爆破给完备适当自收缩子；复相位像受控 | 自收缩子必为平面，与归一化矛盾 | [R15] |
| 第二类选点与永恒解 | $(T-t)\max|A|^2\to\infty$，按最大曲率缩放 | 得到曲率归一化的古老/永恒极限，再用角度或法曲率排除 | [R5], [R6], [R8], [R16] |
| 曲率压缩最大值原理 | $|A|^2$, $|H|^2$, $\cos\alpha$ 的组合不等式 | 长期存在并收敛到全纯曲线 | [R7], [R9], [R10], [R12], [R14] |

## 7. 对现有定理 4.7 审计的直接影响

### 7.1 可以安全引用的结论

1. **Wang Theorem A** 与 Chen-Li Theorem 4.7 给出相同方向的直接结论，且背景假设更宽：四维 Kähler-Einstein 即可，不要求标量曲率非负。
2. **Chen-Li 2002, Remark 6.7** 提供一条清晰的替代闭环：先证明时变缩放切锥为有限个平面，故极限第二基本形式为零；第一类选点缩放又要求极限在归一化点曲率非零，产生矛盾。
3. **Qiu-Sun Theorem 1.3** 是较新的直接无第一类奇点定理，但其假设是超 Kähler 背景和复相位像落在指定凸域，证明核心是自收缩子刚性。

### 7.2 不能从这些文献中自动推出的结论

- “浸入且连通”本身不能自动保证缩放极限的高斯密度为 1；自交或覆盖可能产生更高重数。
- “切锥的支撑是平面”不等同于“切流是单重平面”。应用 White 型密度正则性时必须另有重数控制。
- Chen-Li 2002 的“多个复平面的有限并”不是 Wang 证明中重数一步的修补，二者必须区分。
- 第二类模型的条件性刚性定理，不等于对所有紧致辛流排除第二类奇点。

### 7.3 本次检索未解决的问题

在已核对的直接论文中，没有发现明确命题在 Chen-Li/Wang 的全部浸入假设下证明“每个相关切流均为单重平面”。因此，若现有审计报告希望沿 White 正则性路线闭合，应补充嵌入性、局部面积比或熵/密度小量等足以控制重数的假设；否则宜采用 Chen-Li 2002 式“平坦切锥与非零归一化曲率矛盾”的路线，并逐点核对其紧性与曲率收敛前提。

## 8. 近两年和当前进展

以 2026-08-10 为检索截止日，最值得继续跟踪的条目是：

- **Li-Sun 2024 [R16]：** 辛与几乎标定拉格朗日永恒解的刚性，直接服务于第二类模型排除。
- **Han-Li-Sun 2024 [R17]：** $\beta$-辛临界曲面梯度流的单调性和切锥理论；论文明确把该新流的无第一类奇点作为后续方向。
- **Li-Luo-Sun 2025 [L6]：** 零 Maslov 拉格朗日第二类奇点和永恒模型的定量限制。
- **Chen-Han-Li-Sun 2026 [R18]：** 辛 MCF 切流的最新直接论文；正式摘要支持有限平面切锥和 Type I* 全纯锥，但全文假设和定理编号在本次环境中未完全核验。

另有 arXiv:2309.16478 已于 2025-10-13 撤稿，理由是主要结果已被其他已发表工作覆盖，故不把它列为有效核心证据。

## 9. 参考文献与稳定来源

### 直接与后续辛流文献

[R1] J. Chen and G. Tian, “Moving Symplectic Curves in Kähler-Einstein Surfaces,” *Acta Math. Sin. (Engl. Ser.)* 16 (2000), 541-548. DOI: [10.1007/s101140000075](https://doi.org/10.1007/s101140000075). [期刊全文](https://actamath.cjoe.ac.cn/Jwk_sxxb_en/EN/PDF/10.1007/s101140000075).

[R2] J. Chen and J. Li, “Mean Curvature Flow of Surface in 4-Manifolds,” *Adv. Math.* 163 (2001), 287-309. DOI: [10.1006/aima.2001.2008](https://doi.org/10.1006/aima.2001.2008).

[R3] M.-T. Wang, “Mean Curvature Flow of Surfaces in Einstein Four-Manifolds,” *J. Differential Geom.* 57 (2001), 301-338. DOI: [10.4310/jdg/1090348113](https://doi.org/10.4310/jdg/1090348113). [arXiv:math/0110019](https://arxiv.org/abs/math/0110019).

[R4] J. Chen and J. Li, “Singularities of Codimension Two Mean Curvature Flow of Symplectic Surfaces,” arXiv:math/0208227 (2002). [arXiv](https://arxiv.org/abs/math/0208227).

[R5] X. Han and J. Li, “Singularities of Symplectic and Lagrangian Mean Curvature Flows,” *Front. Math. China* 4 (2009), 283-296. DOI: [10.1007/s11464-009-0018-4](https://doi.org/10.1007/s11464-009-0018-4). [arXiv:math/0611857](https://arxiv.org/abs/math/0611857).

[R6] X. Han and J. Li, “Translating Solitons to Symplectic and Lagrangian Mean Curvature Flows,” *Int. J. Math.* 20 (2009), 443-458. DOI: [10.1142/S0129167X09005352](https://doi.org/10.1142/S0129167X09005352). [arXiv:0711.4435](https://arxiv.org/abs/0711.4435).

[R7] X. Han and J. Li, “The Mean Curvature Flow Approach to the Symplectic Isotopy Problem,” *J. Eur. Math. Soc.* 12 (2010), 505-527. DOI: [10.4171/JEMS/207](https://doi.org/10.4171/JEMS/207).

[R8] X. Han, J. Li and J. Sun, “The Second Type Singularities of Symplectic and Lagrangian Mean Curvature Flows,” *Chinese Ann. Math. Ser. B* 32 (2011), 223-240. DOI: [10.1007/s11401-011-0635-6](https://doi.org/10.1007/s11401-011-0635-6).

[R9] X. Han and J. Li, “Long Time Existence of the Symplectic Mean Curvature Flow,” arXiv:1107.0829 (2011). [arXiv](https://arxiv.org/abs/1107.0829).

[R10] X. Han, J. Li and L. Yang, “Symplectic Mean Curvature Flow in $\mathbb{CP}^2$,” *Calc. Var. Partial Differential Equations* 48 (2013), 111-129. DOI: [10.1007/s00526-012-0544-x](https://doi.org/10.1007/s00526-012-0544-x).

[R11] X. Han and J. Li, “The Mean Curvature Flow Along the Kähler-Ricci Flow,” arXiv:1105.1200 (2011). [arXiv](https://arxiv.org/abs/1105.1200).

[R12] J. Li and L. Yang, “Symplectic Mean Curvature Flows in Kähler Surfaces with Positive Holomorphic Sectional Curvatures,” *Geom. Dedicata* 170 (2014), 63-69. DOI: [10.1007/s10711-013-9867-9](https://doi.org/10.1007/s10711-013-9867-9). [arXiv:1207.5253](https://arxiv.org/abs/1207.5253).

[R13] J. Li and L. Yang, “Generalized Symplectic Mean Curvature Flows in Almost Einstein Surfaces,” *Chinese Ann. Math. Ser. B* 35 (2014), 33-50. DOI: [10.1007/s11401-013-0817-5](https://doi.org/10.1007/s11401-013-0817-5).

[R14] S. Zhang, “Remarks on Symplectic Mean Curvature Flows in Kähler Surfaces with Positive Holomorphic Sectional Curvatures,” arXiv:1507.06806 (2015). [arXiv](https://arxiv.org/abs/1507.06806).

[R15] L.-J. Qiu and J. Sun, “Mean Curvature Flow of Surfaces in a Hyperkähler 4-Manifold,” arXiv:1902.00645 (2019, revised 2020). [arXiv](https://arxiv.org/abs/1902.00645).

[R16] X. Li and J. Sun, “Eternal Solutions to Almost Calibrated Lagrangian and Symplectic Mean Curvature Flows,” *J. Math. Anal. Appl.* 531 (2024), Article 127804. DOI: [10.1016/j.jmaa.2023.127804](https://doi.org/10.1016/j.jmaa.2023.127804).

[R17] X. Han, J. Li and J. Sun, “Gradient Flow for $\beta$-Symplectic Critical Surfaces,” *Ann. Inst. H. Poincaré C Anal. Non Linéaire* 41 (2024), 1083-1116. DOI: [10.4171/AIHPC/100](https://doi.org/10.4171/AIHPC/100). [出版社全文](https://ems.press/journals/aihpc/articles/12362953).

[R18] J. Chen, X. Han, J. Li and J. Sun, “Tangent Flows of Symplectic Mean Curvature Flows,” *J. Math. Study* 59 (2026), 40-59. DOI: [10.4208/jms.v59n1.26.03](https://doi.org/10.4208/jms.v59n1.26.03). [期刊页面](https://journal.hep.com.cn/joms/EN/10.4208/jms.v59n1.26.03).

### 拉格朗日类比

[L1] J. Chen and J. Li, “Singularity of Mean Curvature Flow of Lagrangian Submanifolds,” *Invent. Math.* 156 (2004), 25-51. DOI: [10.1007/s00222-003-0332-5](https://doi.org/10.1007/s00222-003-0332-5). [arXiv:math/0301281](https://arxiv.org/abs/math/0301281).

[L2] A. Neves, “Singularities of Lagrangian Mean Curvature Flow: Zero-Maslov Class Case,” *Invent. Math.* 168 (2007), 449-484. DOI: [10.1007/s00222-007-0036-3](https://doi.org/10.1007/s00222-007-0036-3). [arXiv:math/0608399](https://arxiv.org/abs/math/0608399).

[L3] J. Sun and L. Yang, “Generalized Lagrangian Mean Curvature Flows in Almost Calabi-Yau Manifolds,” *J. Geom. Phys.* 117 (2017), 68-83. DOI: [10.1016/j.geomphys.2017.03.001](https://doi.org/10.1016/j.geomphys.2017.03.001). [arXiv:1307.7854](https://arxiv.org/abs/1307.7854).

[L4] B. Lambert, J. D. Lotay and F. Schulze, “Ancient Solutions in Lagrangian Mean Curvature Flow,” *Ann. Sc. Norm. Super. Pisa Cl. Sci.* 22 (2021), 1169-1205. DOI: [10.2422/2036-2145.201901_016](https://doi.org/10.2422/2036-2145.201901_016). [arXiv:1901.05383](https://arxiv.org/abs/1901.05383).

[L5] J. D. Lotay, F. Schulze and G. Székelyhidi, “Ancient Solutions and Translators of Lagrangian Mean Curvature Flow,” *Publ. Math. IHÉS* 140 (2024), 1-35. DOI: [10.1007/s10240-023-00143-5](https://doi.org/10.1007/s10240-023-00143-5). [arXiv:2204.13836](https://arxiv.org/abs/2204.13836).

[L6] X. Li, Y. Luo and J. Sun, “Type II Singularities of Lagrangian Mean Curvature Flow with Zero Maslov Class,” *J. Funct. Anal.* 289 (2025), Article 111032. DOI: [10.1016/j.jfa.2025.111032](https://doi.org/10.1016/j.jfa.2025.111032). [arXiv:2412.15880](https://arxiv.org/abs/2412.15880).

## 10. 结论

与 Chen-Li 定理 4.7 最直接的其他文献依次是 Wang 2001、Chen-Li 2002、Li-Yang 2014、Zhang 2015 和 Qiu-Sun 2019/2020。它们分别代表四种不同的推进：扩大背景假设、精化切锥并以曲率归一化反证、在正全纯截面曲率下推广，以及利用复相位映射建立自收缩子刚性。后续第二类奇点文献则把问题从“是否能发生第一类奇点”推进为“若只能发生第二类爆破，其古老或永恒极限可能是什么”。

因此，在修订现有定理 4.7 证明时，最稳妥的做法不是笼统援引“后续文献已经解决”，而是明确选择并完整核对一条闭合机制：要么证明满足适用正则性定理所需的密度/重数条件；要么采用 Chen-Li 2002 的平坦切锥与非零归一化曲率矛盾；要么在额外的超 Kähler 相位条件下使用 Qiu-Sun 的自收缩子刚性。
