# Huisken 缩圆球与余二维法向投影次数判据

## 对 Wang Proposition 5.2 的严格补充条件与完整延拓证明

> **结论先行。** Huisken 的圆球模型之所以是一重，不是因为“光滑极限的支撑是球面”，而是因为重标度曲面始终由同一个球面参数域以次数 \(1\) 参数化；在严格凸的一般情形中，等价的全局输入是 Gauss 映射或径向投影为次数 \(1\) 的微分同胚。Huisken 1990 Proposition 3.4 的一般浸入紧性没有提供这个 sheet-counting 信息。
>
> 该机制可以推广到任意余维：用极限子流形管状邻域的法向投影代替标量法向高度。余二维时图函数是二维法向丛值函数，无法比较“上、下”，但 proper、定向保持、总次数 \(1\) 的法向投影仍严格强迫只有一张图。必须另外要求该投影区域穷尽紧集中的全部局部质量；否则可以漏掉另一张也在塌向同一平面的图。
>
> 对 Mu-Tao Wang Proposition 5.2，若在每个终端支撑点增加本文的 **局部法向投影次数一与质量穷尽条件** \((\mathrm{NP}_1)\)，并保证局部流属于所引用的 White 正则性定理的适用类别，则 Wang 已有的 Type-I 紧性和平面支撑论证可严格升级为单位重数平面；继而 Gaussian density 等于 \(1\)，White 局部正则性给出该点正则，最后可光滑延拓越过 \(t_0\)。这个条件是新增的充分条件，不能由 embeddedness、Type-I 曲率界或 \(*F_t^*\omega>\delta\) 单独推出。

**报告日期：** 2026 年 8 月 17 日  
**审计方式：** 核对 Huisken 1984、Huisken 1990、Wang 2001 与 White 2005 原文；WSL 中 Danus 七进程独立压力测试法向投影、定向相消、边界泄漏和遗漏质量。

**Danus verifier 记录：** 精确缩圆球一重性 `05fab507946e999d`；Huisken 严格凸径向次数一机制 `1725c4d0d59415ca`；proper 正 degree-one 投影判据 `82400a0c7d23bdc5`；任意余维法向图及 residual-mass 判据 `a33fca4c7a8f85e3`；闭源流形“完整投影原像”表述的交数障碍 `6541b40869399375`。

---

## 1. 三个容易混淆但必须分开的命题

讨论 multiplicity 时，必须区分：

1. 极限的集合支撑是一个光滑球面或平面；
2. 极限是一个光滑浸入流形；
3. 对应的积分 varifold 是该流形的单位权重 varifold。

若 \(S\) 是光滑子流形，则

$$
|S|,\quad 2|S|,\quad 3|S|,\ldots
$$

有完全相同的支撑、切空间、第二基本形式和平均曲率。因而任何只作用于支撑几何的极限方程都不能区分它们。multiplicity one 的实质是：在极限前的曲面中，每个极限点附近究竟有多少张源流形 sheet。

Huisken 的三个相关结论也必须分开：

| 情形 | 真正的一重性输入 | 是否仅靠局部曲率紧性 |
|---|---|---:|
| 精确 round shrinking sphere | 固定参数化本身是一次嵌入 | 否 |
| 1984 严格凸超曲面趋于球面 | 严格凸性使 Gauss/径向投影为次数 \(1\) 微分同胚 | 否 |
| 1990 Proposition 3.4 | 经过重参数化的光滑浸入子列极限 | 不计 sheet 数 |

因此，不能从第三行反推第一行所具有的全局次数信息。

## 2. 精确缩圆球为什么是单位重数

设

$$
F:S^n\times[0,T)\longrightarrow\mathbb R^{n+1},
\qquad
F(p,t)=r(t)p,
$$

其中 \(p\in S^n\) 且采用向内平均曲率流约定。圆球满足

$$
r'(t)=-\frac nr,
\qquad
r(t)^2=R_0^2-2nt=2n(T-t),
\qquad
T=\frac{R_0^2}{2n}.
\tag{2.1}
$$

采用标准 self-shrinker 重标度

$$
\widehat F(p,t)=\frac{F(p,t)}{\sqrt{T-t}},
$$

有

$$
\widehat F(p,t)=\sqrt{2n}\,p.
\tag{2.2}
$$

所以所有重标度切片不是“趋近”某个球面，而是恒等于同一个参数化球面。若采用 Huisken 1990 的约定

$$
\widetilde F=(2(T-t))^{-1/2}F,
$$

则固定半径为 \(\sqrt n\)；两种约定只差常数伸缩。

对任意紧支撑的 varifold 测试函数 \(\Phi(x,L)\)，面积公式给出

$$
\begin{aligned}
\int_{S^n}
&\Phi\bigl(\widehat F(p),d\widehat F_p(T_pS^n)\bigr)
J_{\widehat F}(p)\,d\mathcal H^n(p)\\
&=\int_{S^n_{\sqrt{2n}}}
\Phi(x,T_xS^n_{\sqrt{2n}})\,d\mathcal H^n(x).
\end{aligned}
\tag{2.3}
$$

右端只出现一次。因此其 varifold 是

$$
\bigl|S^n_{\sqrt{2n}}\bigr|,
$$

而不是 \(m|S^n_{\sqrt{2n}}|\)。这里的一重性来自 \(p\mapsto\sqrt{2n}p\) 是一次嵌入。

必须强调：**单位重数不等于 Gaussian density 必为 \(1\)**。单位重数球形 shrinker 的 Gaussian 面积一般大于 \(1\)；只有单位重数静态平面的标准 Gaussian 面积恰好等于 \(1\)。

## 3. Huisken 严格凸趋球定理中的全局机制

Huisken 1984 Theorem 1.1 从光滑、紧致、严格凸的嵌入超曲面出发，证明未归一化流在有限时间收缩到一点，面积归一化流则在 \(C^\infty\) 中趋于一个圆球。

这一结论具有一般浸入紧性所没有的全局结构：

- 每个时间切片是一个严格凸体的嵌入边界；
- 取收缩点为原点后，每条径向射线与该边界恰交一次；
- 等价地，外法向 Gauss 映射
  $$
  \nu_t:M_t\longrightarrow S^n
  $$
  是微分同胚；
- 因而对极限球的径向法向投影具有拓扑次数 \(1\)。

若 \(M_t\) 在局部出现两张都趋于极限球的 sheet，则典型法向纤维会与 \(M_t\) 相交至少两次，投影次数至少为 \(2\)。严格凸性排除了这种现象。因此“趋于球面”与“一重”的逻辑链应写成

$$
\text{严格凸嵌入}
\Longrightarrow
\text{法向/径向投影次数 }1
\Longrightarrow
\text{恰有一张 sheet}
\Longrightarrow
\text{单位重数球面}.
\tag{3.1}
$$

Huisken 1990 Proposition 3.4 在一般 Type-I 浸入情形只给出经过重参数化的局部光滑浸入极限。它没有严格凸性、全局 Gauss 微分同胚或法向投影次数，因此不能仅由该命题推出单位重数。

## 4. 任意余维的法向投影次数判据

下面把 (3.1) 中真正起作用的部分抽象出来。

### 定理 4.1（proper 正法向投影的 sheet-counting 定理）

设 \(S^n\subset\mathbb R^{n+k}\) 是连通、定向、光滑嵌入子流形，\(\mathcal U\) 是其一个管状邻域，

$$
\pi:\mathcal U\longrightarrow S
$$

为管状法向投影。设 \(\Omega\subset S\) 是连通开集。对每个 \(j\)，令 \(N_j\) 是一个定向 \(n\) 维流形，并设

$$
f_j:N_j\longrightarrow\mathcal U\cap\pi^{-1}(\Omega)
$$

为浸入。定义

$$
p_j:=\pi\circ f_j:N_j\longrightarrow\Omega.
$$

假设：

1. \(p_j\) 是 proper 局部微分同胚；
2. \(p_j\) 处处保持定向，即
   $$
   \det dp_j>0;
   \tag{4.1}
   $$
3. \(p_j\) 的总拓扑次数为
   $$
   \deg p_j=1.
   \tag{4.2}
   $$

则 \(p_j\) 是全局微分同胚。特别地，\(f_j(N_j)\) 是 \(\Omega\) 上恰好一张法向图：存在唯一光滑截面

$$
u_j:\Omega\longrightarrow NS|_\Omega
$$

使

$$
f_j(N_j)=
\left\{
\exp_y^\perp u_j(y):y\in\Omega
\right\}.
\tag{4.3}
$$

#### 证明

proper 局部微分同胚是覆盖映射。对任意 \(y\in\Omega\)，纤维 \(p_j^{-1}(y)\) 是离散紧集，故为有限集。由于 \(p_j\) 处处保持定向，degree 的局部公式为

$$
\deg p_j
=\sum_{x\in p_j^{-1}(y)}
\operatorname{sgn}\det dp_j(x)
=\#p_j^{-1}(y).
\tag{4.4}
$$

结合 \(\deg p_j=1\)，得到

$$
\#p_j^{-1}(y)=1
$$

对每个 \(y\in\Omega\) 成立。因此 \(p_j\) 是双射。双射局部微分同胚的逆映射局部光滑，故 \(p_j\) 为全局微分同胚。令

$$
u_j(y)=\bigl(\exp_y^\perp\bigr)^{-1}
f_j\bigl(p_j^{-1}(y)\bigr),
$$

即得 (4.3)。证毕。

### 推论 4.2（单位 varifold 重数）

在定理 4.1 的条件下，再假设 \(u_j\to0\) 于 \(C^1_{\mathrm{loc}}(\Omega)\)，并且这张图穷尽所有趋于 \(S\) 的局部质量：对每个 \(K\Subset\Omega\) 和充分小的固定管状邻域 \(\mathcal U_K\)，除 \(f_j(N_j)\) 外的曲面部分满足

$$
\|V_j\|
\left(
\mathcal U_K\cap\pi^{-1}(K)
\setminus f_j(N_j)
\right)
\longrightarrow0.
\tag{4.5}
$$

则

$$
V_j\longrightarrow |S|
\quad\text{局部 varifold 收敛于 }\pi^{-1}(\Omega).
\tag{4.6}
$$

事实上，对任意紧支撑连续测试函数 \(\Phi\)，面积公式给出

$$
\int_{f_j(N_j)}\Phi(x,T_xf_j(N_j))\,d\mathcal H^n
=
\int_\Omega
\Phi\bigl(\exp_y^\perp u_j,T_j(y)\bigr)J_j(y)\,d\mathcal H^n(y),
\tag{4.7}
$$

而 \(C^1\) 收敛给出

$$
T_j(y)\to T_yS,
\qquad
J_j(y)\to1.
$$

控制收敛和 (4.5) 遂给出 (4.6)。

### 为什么三个条件都不能删

- 若没有正号条件，三张 sheet 的投影符号可以是 \(+,+,-\)，代数 degree 仍为 \(1\)，但 varifold 重数是 \(3\)。
- 若只对选中的一张图计算 degree，却没有 (4.5)，另一张位于所选管半径外、但仍趋向 \(S\) 的图会在极限中增加重数。
- 若没有 proper 或边界缓冲，sheet 可以从所研究圆盘的侧边界进入或退出，纤维数不再由局部 degree 稳定控制。

## 5. 余二维版本：用二维法向纤维替代“上、下排序”

现在令 \(n=2,k=2\)，并取一个定向二维平面

$$
P^2\subset\mathbb R^4.
$$

其法空间也是二维：

$$
P^\perp\cong\mathbb R^2.
$$

一张法向图写成

$$
F_j(y)=y+u_j(y),
\qquad
u_j:B_R^P\longrightarrow P^\perp.
\tag{5.1}
$$

这里 \(u_j\) 是向量值函数，两个向量不能像余一标量高度那样作全局大小比较。因此余一证明中的“最上层减最下层”不能直接搬到余二维。

但正交投影

$$
\pi_P:P\oplus P^\perp\longrightarrow P
$$

仍有定义。若 \(F_j\) 是图，则

$$
\pi_P\circ F_j(y)=y.
$$

其图面积 Jacobian 为

$$
J_{F_j}
=\sqrt{\det\bigl(I+(Du_j)^TDu_j\bigr)},
\tag{5.2}
$$

而投影在图切空间上的二维 Jacobian 为 \(J_{F_j}^{-1}>0\)。因此法向投影的正 degree 正好计算图的几何张数，而完全不需要给二维法向向量排序。

### 引理 5.1（Kähler 角正性给出投影正号）

设 \((\mathbb R^4,J,\omega)\) 为 Hermitian 向量空间，\(P\) 按 \(\omega|_P>0\) 定向。若定向二维平面 \(E_i\) 在无向 Grassmannian 中趋于 \(P\)，且

$$
\omega|_{E_i}\ge\delta\,d\mu_{E_i}>0,
\tag{5.3}
$$

则对充分大的 \(i\)，

$$
\det\bigl(\pi_P|_{E_i}:E_i\to P\bigr)>0.
\tag{5.4}
$$

#### 证明

取 \(E_i\) 的正向单位简单二向量 \(\xi_i\)。无向收敛只允许

$$
\xi_i\to\xi_P
\quad\text{或}\quad
\xi_i\to-\xi_P.
$$

但 \(\omega(\xi_i)\ge\delta>0\)，而 \(\omega(-\xi_P)<0\)，故第二种情形不可能。于是定向收敛到 \(\xi_P\)，投影行列式最终为正。证毕。

因此，在 Wang 的正 Kähler 角条件下，只要已经得到定向切平面趋于 \(P\)，投影的正号可以由原假设推出；真正新增且非自动的是 **总次数 \(1\)** 与 **全部局部质量被该投影系统捕获**。

## 6. Wang Proposition 5.2 原证明停在哪里

Wang Proposition 5.2 设

$$
F:\Sigma\times[0,t_0)\longrightarrow M^4\hookrightarrow\mathbb R^N
$$

为紧定向曲面的平均曲率流，并假设环境嵌入的第二基本形式有界，同时存在 \(\delta,C>0\) 使

$$
\eta_t=*F_t^*\omega>\delta,
\qquad
|A_t|^2\le\frac{C}{t_0-t}.
\tag{6.1}
$$

以终端候选点 \((y_0,t_0)\) 为中心作抛物放缩

$$
F^\lambda(p,s)
=\lambda\left(F\left(p,t_0+\frac{s}{\lambda^2}\right)-y_0\right),
\qquad s<0.
\tag{6.2}
$$

Wang 的加权单调性选择 \(\lambda_i\to\infty\)、\(s_i\to-1\)，使相应曲率组合在极限中消失。Type-I 界给出固定负时间区间上的重标度曲率界：

$$
|A^{\lambda_i}|^2(p,s)
\le\frac{C}{-s}.
\tag{6.3}
$$

配合高阶导数估计与局部面积控制，可取局部光滑多图子列。极限方程给出

$$
H_\infty=0,
\qquad
H_\infty+\frac12F_\infty^\perp=0,
$$

故

$$
F_\infty^\perp=0.
\tag{6.4}
$$

这可以推出极限的光滑支撑是一个二维线性平面 \(P\subset T_{y_0}M\cong\mathbb R^4\)。但完整的积分 varifold 结论一般只能写成

$$
V_{-1}^\infty=m|P|,
\qquad m\in\mathbb N.
\tag{6.5}
$$

因为任意 \(m|P|\) 都满足 (6.4)，所以从 (6.4) 到 \(m=1\) 需要独立的 sheet-counting 输入。嵌入性本身不足够：多张互不相交的平行图可在保持曲率一致有界时塌向同一个平面。

## 7. 可严格补全 Proposition 5.2 的新增条件

为了处理非紧平面和圆盘侧边界，条件必须使用缓冲半径。

### 条件 \((\mathrm{NP}_1)\)：余二维局部法向投影次数一与质量穷尽

对每个终端支撑点 \((y_0,t_0)\)，要求存在一组 Wang 能量消失选择所允许的

$$
\lambda_i\to\infty,
\qquad
s_i\to-1,
$$

使切片

$$
\Sigma_i=F^{\lambda_i}_{s_i}(\Sigma)
$$

局部光滑多图收敛到一个定向平面 \(P\subset T_{y_0}M\cong\mathbb R^4\)。此外，对每个 \(R>0\)，存在源流形中的开集 \(\mathcal W_{i,R}\subset\Sigma\)，使对所有充分大的 \(i\)：

1. **缓冲与局部质量穷尽：** \(F^{\lambda_i}_{s_i}(\mathcal W_{i,R})\) 位于 \(P\) 在 \(B_{R+1}^P\) 上的管状邻域中。记 \(V_i\) 为完整参数化 varifold，\(W_{i,R}\) 为把 \(V_i\) 限制到 \(\mathcal W_{i,R}\) 所得的非负子-varifold，并令
   $$
   Q_{i,R}:=V_i-W_{i,R}\ge0.
   $$
   要求
   $$
   \|Q_{i,R}\|(B_R^4(0))\longrightarrow0.
   \tag{7.1}
   $$
   因而 \(B_R^4\) 中没有具有非消失质量的未记录 sheet；
2. **proper 局部投影：**
   $$
   p_{i,R}:=
   \pi_P\circ F^{\lambda_i}_{s_i}:
   \mathcal W_{i,R}\longrightarrow B_{R+1}^P
   \tag{7.2}
   $$
   是 proper 局部微分同胚；
3. **正号与次数一：**
   $$
   \det dp_{i,R}>0,
   \qquad
   \deg p_{i,R}=1.
   \tag{7.3}
   $$
4. **Gaussian 尾部紧性：** 沿同一序列，完整重标度切片满足
   $$
   \lim_{R\to\infty}\limsup_{i\to\infty}
   \int_{\Sigma_i\setminus B_R^4}
   \frac{1}{4\pi(-s_i)}
   e^{-|x|^2/[4(-s_i)]}\,d\mu_i=0.
   \tag{7.4}
   $$
   等价地，可以直接假设所取序列具有标准 tangent-flow 的 Gaussian 加权收敛。

条件 (7.1) 是正确的 residual-mass 表述。更强但非必需的充分版本是：所有映入 \(B_R^4\) 的源点都属于 \(\mathcal W_{i,R}\)，此时 (7.1) 的左端恒为零。不能要求 \(\mathcal W_{i,R}\) 是闭源流形关于整个底圆盘的全部投影原像且所有投影符号同正；闭源流形的全局交数会使这种表述一般不可能。使用选定的源流形开集加剩余质量，而不只使用环境像，是为了正确计算浸入的不同 sheets。

由引理 5.1，在 \(\eta_i>\delta\) 且定向切平面光滑趋于 \(P\) 时，(7.3) 的正号部分最终自动成立；但 degree \(1\) 和完全捕获仍是新增假设。

### 定理 7.1（带 \((\mathrm{NP}_1)\) 的 Wang 延拓命题）

在 Wang Proposition 5.2 的原假设 (6.1) 以及标准局部紧性假设下，再假设每个终端支撑点满足 \((\mathrm{NP}_1)\)。还假设终端支撑附近的局部流属于所使用的 White 局部正则性定理的适用类别；例如每个 \(F_t\) 在那里是 proper embedded，或已有相应的 unit-regular integral Brakke 版本可用。则存在 \(\varepsilon>0\)，使平均曲率流可光滑延拓到

$$
[0,t_0+\varepsilon).
$$

## 8. 定理 7.1 的完整证明

### 第一步：次数一推出每个紧球中只有一张向量值图

固定终端支撑点 \((y_0,t_0)\) 及 \(R>0\)。由 (7.2)--(7.3) 和定理 4.1，

$$
p_{i,R}:\mathcal W_{i,R}\longrightarrow B_{R+1}^P
$$

是微分同胚。因此存在唯一向量值法向图

$$
u_{i,R}:B_{R+1}^P\longrightarrow P^\perp\cong\mathbb R^2
$$

使

$$
F^{\lambda_i}_{s_i}(\mathcal W_{i,R})
=\{y+u_{i,R}(y):y\in B_{R+1}^P\}.
\tag{8.1}
$$

Wang 的局部光滑平面支撑收敛给出

$$
u_{i,R}\longrightarrow0
\quad\text{于 }C^\infty(B_R^P).
\tag{8.2}
$$

条件 (7.1) 说明选中图之外的剩余 varifold 在 \(B_R^4\) 中质量趋零。因此整个局部 varifold 而不仅是选中分支满足

$$
V_i\lfloor B_R^4
\longrightarrow
|P|\lfloor B_R^4.
\tag{8.3}
$$

让 \(R\to\infty\) 并作相容对角选择，得到时间 \(-1\) 的切片

$$
V_{-1}^\infty=|P|.
\tag{8.4}
$$

所以重数 \(m=1\)。

### 第二步：单位平面的 Gaussian 密度为 \(1\)

二维标准后向热核在重标度时间 \(-1\) 为

$$
\rho_{0,0}(x,-1)
=\frac1{4\pi}e^{-|x|^2/4}.
\tag{8.5}
$$

因此

$$
\begin{aligned}
\int_P\rho_{0,0}(x,-1)\,d\mathcal H^2(x)
&=\frac1{4\pi}
\int_0^{2\pi}\int_0^\infty
e^{-r^2/4}r\,dr\,d\theta\\
&=1.
\end{aligned}
\tag{8.6}
$$

切流的 Gaussian 质量等于基点的 Huisken 密度。故

$$
\Theta(y_0,t_0)=1.
\tag{8.7}
$$

这里只需要每个终端点存在一条满足 \((\mathrm{NP}_1)\) 的切流序列：\(\Theta(y_0,t_0)\) 是由单调性公式定义的唯一极限，与所取序列无关；一条切流已经计算出该共同极限为 \(1\)。局部 Radon 收敛本身不能测试非紧支撑的 Gaussian；条件 (7.4)，或标准 tangent-flow 的加权收敛，正是把局部收敛提升为完整 Gaussian 积分收敛所需的尾部输入。Wang 的 cutoff 单调性和缩放恒等式应在具体应用中用于核验这一步。

### 第三步：White 局部正则性

White 2005 Theorem 3.5 给出常数 \(\varepsilon_{\mathrm W}>0\)，使首个终端时刻、属于其经典 proper embedded 适用类别的紧平均曲率流若满足

$$
\Theta(y_0,t_0)<1+\varepsilon_{\mathrm W},
$$

则 \((y_0,t_0)\) 为正则点。由 (8.7)，

$$
1<1+\varepsilon_{\mathrm W},
$$

所以 \((y_0,t_0)\) 正则。White 论文第 4 节允许把 Riemannian 环境等距嵌入欧氏空间后产生的光滑有界附加力纳入同一局部估计；在 blow-up 极限中该环境误差消失。若只给出一般 immersed flow，则这里必须另引确实适用于该参数化/Brakke 类别的一重平面正则性版本，不能仅凭名称省略适用性检查。

### 第四步：从逐点正则到全局延拓

由 Type-I 界，

$$
|H|\le\sqrt2|A|
\le\frac{C_1}{\sqrt{t_0-t}}.
$$

因此对 \(0\le s<t<t_0\)，

$$
\sup_{p\in\Sigma}
d_M(F(p,t),F(p,s))
\le
\int_s^t\sup_\Sigma|H(\tau)|\,d\tau
\le2C_1\sqrt{t_0-s}.
\tag{8.8}
$$

所以 \(F_t\) 在 \(C^0\) 中一致趋于一个连续终端映射 \(F_{t_0}\)。由于 \(\Sigma\) 紧致，终端像 \(F_{t_0}(\Sigma)\) 紧致。

对终端像的每一点应用前三步，得到一个具有尺度不变曲率控制的正则抛物邻域。有限多个这样的邻域覆盖终端像，故存在 \(\tau>0\) 使

$$
\sup_{\Sigma\times[t_0-\tau,t_0)}|A|<\infty.
\tag{8.9}
$$

结合早期紧时间区间的光滑性，

$$
\sup_{\Sigma\times[0,t_0)}|A|<\infty.
$$

标准抛物内部估计进一步控制所有 \(\nabla^mA\)，于是 \(F_t\) 光滑收敛到 \(t=t_0\) 的光滑浸入，并可由短时间存在唯一性从该切片重新启动。故存在 \(\varepsilon>0\) 使流延拓到 \([0,t_0+\varepsilon)\)。证毕。

## 9. 压力测试：补充条件为何具有正确强度

### 9.1 \(m\) 张平行图

令

$$
\Gamma_j^a
=\{y+\varepsilon_jv_a:y\in P\},
\qquad a=1,\ldots,m,
$$

其中 \(\varepsilon_j\downarrow0\)，\(v_a\in P^\perp\) 互异。每张图曲率为零，且并集嵌入、局部光滑趋于平面支撑，但

$$
|\Gamma_j^1\cup\cdots\cup\Gamma_j^m|
\longrightarrow m|P|.
$$

若所有图定向相容，则法向投影的 degree 恰为 \(m\)。因此 degree \(1\) 精确排除 \(m\ge2\)。

### 9.2 反向定向相消

三张图若投影符号为 \(+,+,-\)，代数 degree 为 \(1\)，而无向 varifold 重数为 \(3\)。所以只写“degree \(1\)”而不写正 Jacobian 不够。Wang 的正 Kähler 角与定向平面收敛可提供这个正号。

### 9.3 选择性管状邻域遗漏第二张图

设两张图的法向高度分别为 \(0\) 与 \(2\rho_j\)，其中 \(\rho_j\to0\)。若只在半径 \(\rho_j\) 的管中选第一张图，则所选投影 degree 为 \(1\)，但两张图的总 varifold 极限仍为 \(2|P|\)。这说明 (7.1) 的完全捕获或 (4.5) 的质量穷尽不可省略。

### 9.4 非紧平面的边界问题

直接在闭圆盘上谈 covering 会引入边界。条件 \((\mathrm{NP}_1)\) 在开圆盘 \(B_{R+1}^P\) 上要求 proper，并只在严格较小的 \(B_R^4\) 中下结论。这个缓冲层阻止 sheet 从侧边界进入或退出，然后令 \(R\to\infty\)。

## 10. 与其他补充条件的关系

在已经证明切流为整数重平面 \(m|P|\) 后，以下任一条件都能补上 Wang 证明：

1. 标准 Gaussian density 满足 \(\Theta(y_0,t_0)<2\)；
2. 已有独立的一重性定理；
3. 每个紧集上整个重标度切片是一张 degree-one 法向图；
4. 本文的 proper、正 degree-one 法向投影加 residual-mass 穷尽条件。

第一项由 \(m\in\mathbb N\) 和 \(\Theta=m\) 立即推出 \(m=1\)，是最简洁的数值条件。本文条件的价值在于揭示 Huisken 凸趋球情形中真正可迁移的几何机制，并在余二维中不依赖法向向量的全序。

本文不声称 \((\mathrm{NP}_1)\) 是所有可能补充条件中逻辑上最弱的一个；它是一个可直接验证、边界安全、能准确计数 sheets 的充分条件。

## 11. 最终判定

严格结论如下：

1. 精确缩圆球的一重性由其固定的一次嵌入参数化直接给出；
2. Huisken 1984 严格凸趋球的一重性由严格凸性产生的 Gauss/径向投影次数 \(1\) 给出；
3. Huisken 1990 Proposition 3.4 的一般光滑浸入紧性不自动给出一重性；
4. 法向投影次数判据与余维无关，余二维只需把标量图换成 \(P^\perp\cong\mathbb R^2\) 值图；
5. Wang 原证明的平面支撑步骤本身不能确定 \(m\)；
6. 在每个终端支撑点增加 \((\mathrm{NP}_1)\)，并确认局部流属于 White 定理或相应 Brakke 正则性定理的适用类别后，可以严格得到 \(m=1\)、Gaussian density \(1\)、正则性以及越过 \(t_0\) 的光滑延拓；
7. \((\mathrm{NP}_1)\) 的 degree-one 与 residual-mass 穷尽部分是新增假设，不能从 embeddedness、Type-I 界或正 Kähler 角形式推出。

## 参考文献

**[1]** G. Huisken, *Flow by Mean Curvature of Convex Surfaces into Spheres*, Journal of Differential Geometry **20** (1984), 237--266. Theorem 1.1 and Sections 9--10. DOI: 10.4310/jdg/1214438998.

**[2]** G. Huisken, *Asymptotic Behavior for Singularities of the Mean Curvature Flow*, Journal of Differential Geometry **31** (1990), 285--299. Proposition 3.4. DOI: 10.4310/jdg/1214444099.

**[3]** M.-T. Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds*, Journal of Differential Geometry **57** (2001), 301--338. Proposition 5.2, especially pp. 316 and 323--324. DOI: 10.4310/jdg/1090348113; arXiv: math/0110019.

**[4]** B. White, *A Local Regularity Theorem for Mean Curvature Flow*, Annals of Mathematics **161** (2005), 1487--1519. Theorem 3.5 and Section 4. DOI: 10.4007/annals.2005.161.1487.
