# 经典平均曲率流的光滑紧性与 varifold 重数

## 余二维重数反例与 Wang Proposition 5.2 的经典解修订

> **判定。** “每个近似曲面都是连通、光滑、嵌入、单位密度，且第二基本形式及所有协变导数一致有界，所以光滑极限必为单位重数”是错误命题。曲率紧性控制局部几何，却不记录一个极限点附近有多少张 sheet。即使在紧致 Kähler 四维流形中，即使每个有限时刻都是连通嵌入的经典平均曲率流、Kähler 角有统一正下界、所有曲率导数一致有界，$t\to\infty$ 的 varifold 极限仍可为任意 $m\ge2$ 重的光滑复环面。
>
> 正确命题是：一张完整法向图的 $C^1$ 收敛给出一重极限；$m$ 张完整法向图给出 $m$ 重极限；参数化 Cheeger-Gromov 收敛若趋于一个 $m$ 重覆盖浸入，也给出 $m$ 重 varifold。要从 Wang 的平面支撑结论推出一重，必须另外提供 sheet-counting 条件。
>
> 本报告把 Wang Proposition 5.2 严格改写为仅关于**奇点前的经典嵌入平均曲率流**的命题。Varifold 只用于记录每个光滑切片的面积测度以及 blow-up 极限；证明不研究一般 Brakke 流，也不调用 Brakke 正则性定理。

**报告日期：** 2026 年 8 月 17 日  
**审计对象：** Mu-Tao Wang 2001, Proposition 5.2；此前报告 *Huisken 缩圆球与余二维法向投影次数判据*。  
**Danus 配置：** 7 个机器人，`high` 3 个，`xhigh` 4 个；模型 `gpt-5.6-sol`。

---

## 1. 范畴与记号：经典流不等于自动单位密度

令 \(\Sigma^n\) 为光滑流形，\(F:\Sigma\to N\) 为光滑浸入。其**典范推前 varifold** \(V_F\) 定义为

$$
V_F(\Phi)=\int_\Sigma
\Phi\bigl(F(p),dF_p(T_p\Sigma)\bigr)\,d\mu_F(p).
\tag{1.1}
$$

面积公式说明典范推前会计算源点原像数。对于紧源浸入，每个纤维是有限集，并且在相应正则意义下

$$
\Theta^n(\|V_F\|,y)=\#F^{-1}(y).
\tag{1.2}
$$

因此必须区分：

1. 若 \(F\) 是嵌入，则 \(V_F=|F(\Sigma)|\)，其整值密度为 \(1\)；
2. 若 \(F\) 是 \(m\) 重覆盖浸入，则 \(V_F=m|F(\Sigma)|\)；
3. 若浸入只有低维自交集合，密度可以在 \(\|V_F\|\)-几乎处处等于 \(1\)，但 \(F\) 仍不是嵌入。

所以“经典平均曲率流”只说明参数化映射满足

$$
\partial_tF=H.
\tag{1.3}
$$

它本身不说明 \(F_t\) 是否嵌入，也不说明典范推前 varifold 是否单位密度。以后本文所称 **经典嵌入平均曲率流**，均明确要求每个奇点前切片 \(F_t\) 是嵌入；此时

$$
V_t=|F_t(\Sigma)|
$$

是单位密度积分 varifold。这里没有把 \(\{V_t\}\) 当作一般弱 Brakke 流研究。

### 1.1 单位密度在 varifold 收敛下不封闭

即使每个 \(V_i\) 都由单位密度嵌入子流形诱导，也可能

$$
V_i\longrightarrow m|S|,\qquad m\ge2.
\tag{1.4}
$$

不同 sheets 的面积测度在极限中相加。Varifold 收敛不保留“每个 \(i\) 的密度函数等于 \(1\)”这一点态标签。

## 2. 四种不同的“光滑收敛”

设 \(S^n\subset N^{n+k}\) 是光滑嵌入极限子流形，\(\pi\) 是管状邻域中的法向投影。

### 2.1 单图收敛

若整个局部曲面恰为

$$
M_i=\{\exp_x^\perp u_i(x):x\in S\},
\qquad u_i\to0\quad C^1,
\tag{2.1}
$$

则面积公式给出 \(|M_i|\to|S|\)。“一张完整图”本身已经包含一重性。

### 2.2 多图收敛

若整个局部曲面是 \(m\) 张互不相交的图

$$
M_i=\bigsqcup_{a=1}^m
\{\exp_x^\perp u_i^a(x):x\in S\},
\qquad u_i^a\to0\quad C^1,
\tag{2.2}
$$

则每张图贡献一次面积，故

$$
|M_i|\longrightarrow m|S|.
\tag{2.3}
$$

### 2.3 参数化光滑或 Cheeger-Gromov 收敛

若紧源上的嵌入 \(f_i:\Sigma\to N\) 在适当重参数化后 \(C^1\) 收敛到浸入 \(f_\infty\)，则

$$
|f_i(\Sigma)|\longrightarrow (f_\infty)_\#|\Sigma|.
\tag{2.4}
$$

若 \(f_\infty:\Sigma\to S\) 是 \(m\) 重覆盖，则右端是 \(m|S|\)，不是 \(|S|\)。Cheeger-Gromov 收敛记住极限源流形和极限浸入，但不会自动把非单射极限浸入改成其像上的单位权重。

### 2.4 仅有曲率各阶有界

一致的

$$
|A_i|+|\nabla A_i|+\cdots+|\nabla^qA_i|\le C_q
\tag{2.5}
$$

只提供局部正则性。要得到紧性仍需基点、局部面积或图片数控制；即使得到光滑浸入极限，(2.5) 也不控制覆盖次数。第二基本形式是每张 sheet 的局部张量，看不到另一张非常接近但互不相交的 sheet。

## 3. 欧氏余二维中的显式反例

### 命题 3.1（连通嵌入环面趋于任意高重数）

取 \(R_1,R_2>0\)、整数 \(m\ge2\)，并令

$$
S=\{(R_1e^{i\alpha},R_2e^{i\beta}):
\alpha,\beta\in\mathbb R/2\pi\mathbb Z\}\subset\mathbb C^2.
\tag{3.1}
$$

在 \(\mathbb T^2\) 上定义

$$
F_\varepsilon(\theta,\phi)=
\bigl((R_1+\varepsilon\cos\theta)e^{im\theta},
(R_2+\varepsilon\sin\theta)e^{i\phi}\bigr),
\tag{3.2}
$$

其中 \(0<\varepsilon<\min(R_1,R_2)\)。则：

1. \(F_\varepsilon\) 是连通紧环面的光滑嵌入；
2. 诱导度量一致非退化，且所有 \(|\nabla^qA_\varepsilon|\) 一致有界；
3. \(F_\varepsilon\to F_0\) 于 \(C^\infty\)，而
   $$
   F_0(\theta,\phi)=(R_1e^{im\theta},R_2e^{i\phi})
   $$
   是 \(S\) 的 \(m\) 重覆盖；
4. 单位密度像 varifold 满足
   $$
   |F_\varepsilon(\mathbb T^2)|\longrightarrow m|S|.
   \tag{3.3}
   $$

#### 证明

若两个像点相同，比较两个复坐标的模长得到

$$
\cos\theta=\cos\theta',\qquad
\sin\theta=\sin\theta'.
$$

故 \(\theta=\theta'\pmod{2\pi}\)，再由第二复坐标得到 \(\phi=\phi'\)。所以 \(F_\varepsilon\) 单射。

直接微分得

$$
g_{\theta\theta}
=m^2(R_1+\varepsilon\cos\theta)^2+\varepsilon^2,
\quad g_{\theta\phi}=0,
\quad g_{\phi\phi}=(R_2+\varepsilon\sin\theta)^2.
\tag{3.4}
$$

两条对角元有与 \(\varepsilon\) 无关的正下界，故紧源单射浸入是嵌入。公式 (3.2) 对 \(\varepsilon\in[0,\varepsilon_0]\) 光滑，且 (3.4) 在 \(\varepsilon=0\) 仍正定。第二基本形式及其每个协变导数都是 \(F_\varepsilon\) 的有限阶导数、\(g_\varepsilon^{-1}\) 及其导数的光滑组合，因此在紧参数集上有统一界。

最后，对任意 varifold 测试函数 \(\Phi\)，面积公式与控制收敛给出

$$
\begin{aligned}
\lim_{\varepsilon\downarrow0}|F_\varepsilon(\mathbb T^2)|(\Phi)
&=\int_{\mathbb T^2}
\Phi(F_0,dF_0(T\mathbb T^2))J_{F_0}\,d\theta d\phi\\
&=m\int_S\Phi(x,T_xS)\,d\mathcal H^2(x).
\end{aligned}
\tag{3.5}
$$

这就是 (3.3)。证毕。

局部有 \(m\) 张 sheets，但它们通过全局参数 \(\theta\) 的 monodromy 连接成一个环面。因而“近似曲面连通”不能推出“局部只有一张图”。

## 4. 更强反例：真正的经典嵌入平均曲率流

### 定理 4.1（平坦 Kähler 四环面中的 \(m\) 重无限时间极限）

令

$$
M=(\mathbb R/2\pi\mathbb Z)^4
$$

带平坦度量、坐标 \((x_1,y_1,x_2,y_2)\) 及

$$
\omega=dx_1\wedge dy_1+dx_2\wedge dy_2.
$$

固定整数 \(m\ge2\) 与 \(0<r_0<\pi/2\)。令 \(r(t)\) 解

$$
r'(t)=-\frac{r(t)}{m^2+r(t)^2},
\qquad r(0)=r_0,
\tag{4.1}
$$

并定义

$$
F(\theta,\phi,t)=
\bigl(m\theta,\phi,r(t)\cos\theta,r(t)\sin\theta\bigr)
\pmod{2\pi}.
\tag{4.2}
$$

则 \(F_t\) 对每个有限 \(t\ge0\) 都是连通嵌入的经典平均曲率流切片，并且

$$
\inf_{\Sigma\times[0,\infty)}*F_t^*\omega
\ge\frac{m}{\sqrt{m^2+r_0^2}}>0,
\qquad
\sup_{t\ge0}|\nabla^qA_t|\le C_q
\tag{4.3}
$$

对每个 \(q\ge0\) 成立，但

$$
|F_t(\mathbb T^2)|\longrightarrow m|S|,
\qquad S=\{(\alpha,\beta,0,0)\},
\quad t\to\infty.
\tag{4.4}
$$

#### 证明：嵌入、度量和流方程

因 \(0<r(t)\le r_0<\pi/2\)，若两个像点在四环面中相同，则最后两个坐标实际相同，故 \((\cos\theta,\sin\theta)=(\cos\theta',\sin\theta')\)。于是 \(\theta=\theta'\)，再由第二坐标得 \(\phi=\phi'\)。

记 \(q=m^2+r^2\)。切向量为

$$
E_\theta=(m,0,-r\sin\theta,r\cos\theta),
\qquad E_\phi=(0,1,0,0),
\tag{4.5}
$$

从而

$$
g_t=q\,d\theta^2+d\phi^2.
\tag{4.6}
$$

取单位法向量 \(n_1=(0,0,\cos\theta,\sin\theta)\)。因 (4.6) 的空间坐标系数为常数，诱导 Christoffel 符号为零，而且

$$
F_{\theta\theta}=-rn_1,
\qquad F_{\theta\phi}=F_{\phi\phi}=0.
$$

所以在“平均曲率向量等于第二基本形式的迹”的约定下

$$
H=-\frac r{m^2+r^2}n_1.
\tag{4.7}
$$

另一方面 \(\partial_tF=r'(t)n_1\)。结合 (4.1) 得 \(\partial_tF=H\)，且无切向误差。

#### 证明：长期存在、Kähler 角和曲率界

积分 (4.1) 得

$$
m^2\log r(t)+\frac12r(t)^2
=-t+m^2\log r_0+\frac12r_0^2.
\tag{4.8}
$$

因此 \(r(t)>0\) 对每个有限 \(t\) 成立，而 \(r(t)\downarrow0\) 当 \(t\to\infty\)。又

$$
F_t^*\omega=m\,d\theta\wedge d\phi,
\qquad d\mu_t=\sqrt{m^2+r^2}\,d\theta\wedge d\phi,
$$

故

$$
\eta_t=*F_t^*\omega=\frac m{\sqrt{m^2+r^2}},
\tag{4.9}
$$

得到 (4.3) 的第一部分。为逐阶计算曲率，补取第二个单位法向量

$$
n_2=\frac1{\sqrt q}(r,0,m\sin\theta,-m\cos\theta).
$$

直接投影得

$$
\nabla^\perp_{\partial_\theta}n_1
=-\frac m{\sqrt q}n_2,
\qquad
\nabla^\perp_{\partial_\theta}n_2
=\frac m{\sqrt q}n_1,
\tag{4.10}
$$

而两个法向量沿 \(\partial_\phi\) 的法向导数均为零。又只有 \(A_{\theta\theta}=-rn_1\) 非零，空间 Christoffel 符号为零。归纳并用 \(g^{\theta\theta}=q^{-1}\) 提升 \(k+2\) 个 \(\theta\) 指标，得到精确公式

$$
|\nabla^kA_t|
=\frac{r(t)m^k}{(m^2+r(t)^2)^{k+1}}
\le\frac{r_0}{m^{k+2}}.
\tag{4.11}
$$

这证明 (4.3) 的所有空间协变导数界，不需要省略任何紧性步骤。

#### 证明：高重数极限

有 \(F_t\to F_\infty\) 于 \(C^\infty\)，其中

$$
F_\infty(\theta,\phi)=(m\theta,\phi,0,0)
$$

是复环面 \(S\) 的 \(m\) 重覆盖。面积公式给出 (4.4)。每个有限 \(t\) 的像 varifold 是单位密度，但极限把 \(m\) 张法向 sheets 相加。证毕。

### 4.2 反例的适用边界

它严格证明：经典方程、单个连通分支、嵌入性、正 Kähler 角和所有曲率导数一致有界，仍不足以控制**无限时间** varifold 极限的重数。

它不反驳 Wang Proposition 5.2，因为该流没有有限首奇异时刻；\(r(t)\) 只在 \(t=\infty\) 消失。它也不是满足 Wang 全部 Type-I blow-up 条件的有限时奇点反例。它的作用是证明：从光滑紧性本身到 multiplicity one 的逻辑推断无效，必须加入独立次数或单图条件。

## 5. 正确的多图紧性定理

### 定理 5.1（光滑多图极限的重数等于 sheet 数）

设 \(S^n\subset N^{n+k}\) 是连通、光滑、嵌入子流形，\(\pi:\mathcal U\to S\) 为管状法向投影。设 \(M_i\) 是单位密度嵌入子流形。假设对每个 \(x\in S\)，存在连通邻域 \(U_x\Subset S\) 与正整数 \(m_x\)，使充分大的 \(i\) 满足

$$
M_i\cap\pi^{-1}(U_x)
=\bigsqcup_{a=1}^{m_x}
\{\exp_y^\perp u_{i,a}(y):y\in U_x\},
\tag{5.1}
$$

并且 \(u_{i,a}\to0\) 于 \(C^1_{\mathrm{loc}}(U_x)\)。若 (5.1) 穷尽所研究管内的全部质量，则 \(m_x\) 局部常值，故在连通的 \(S\) 上等于一个整数 \(m\)，且

$$
|M_i|\longrightarrow m|S|
\tag{5.2}
$$

局部 varifold 收敛。

#### 证明

在两个重叠邻域的每个点上，法向投影纤维与 \(M_i\) 的交点数既等于 \(m_x\) 又等于 \(m_z\)，故 \(m_x=m_z\)。连通性通过邻域链给出一个全局整数 \(m\)。

对紧支撑测试函数 \(\Phi\)，逐图使用面积公式：

$$
|M_i|(\Phi)
=\sum_{a=1}^m\int_S
\Phi\bigl(\exp_y^\perp u_{i,a},T_{i,a}(y)\bigr)
J_{i,a}(y)\,d\mathcal H^n(y).
\tag{5.3}
$$

\(C^1\) 收敛给出 \(T_{i,a}(y)\to T_yS\) 与 \(J_{i,a}\to1\)。控制收敛使每一项趋于 \(|S|(\Phi)\)，求和得到 (5.2)。证毕。

### 推论 5.2（连通性不控制局部 sheet 数）

定理中的 \(M_i\) 可以全部连通而 \(m\ge2\)。第 3、4 节的环面中，法向投影是连通的 \(m\) 重覆盖；局部 sheets 通过全局 monodromy 连接。因此 Wang 文中“可取连通分支”不等价于“该分支只含一张局部图”。

## 6. 任意余维的法向投影次数定理

### 定理 6.1（positive degree 精确计数 sheets）

设 \(\Omega\subset S\) 连通，\(\Gamma_i\) 为管状邻域内的定向嵌入 \(n\) 维子流形，并令

$$
p_i=\pi|_{\Gamma_i}:\Gamma_i\longrightarrow\Omega.
$$

假设 \(p_i\) 是 proper 局部微分同胚，处处保持定向，而且

$$
\deg p_i=d>0.
\tag{6.1}
$$

则 \(p_i\) 是 \(d\) 张的覆盖映射。特别地，当 \(d=1\) 时，\(p_i\) 是微分同胚，\(\Gamma_i\) 恰为一张向量值法向图。

#### 证明

proper 局部微分同胚是覆盖映射。对任意 \(y\in\Omega\)，纤维 \(p_i^{-1}(y)\) 离散且紧，因而有限。次数公式为

$$
\deg p_i
=\sum_{x\in p_i^{-1}(y)}
\operatorname{sgn}\det dp_i(x).
\tag{6.2}
$$

每个符号都是 \(+1\)，所以

$$
d=\#p_i^{-1}(y).
\tag{6.3}
$$

当 \(d=1\) 时每条纤维恰有一点，故 \(p_i\) 双射；双射局部微分同胚的逆映射光滑。管状坐标把 \(\Gamma_i\) 写成唯一法向截面。证毕。

余二维时，法向截面取值于秩二法向丛，不能使用“最上层/最下层”的标量排序；但 (6.2) 完全不依赖余维。

### 6.2 为什么还要 residual-mass 条件

次数 \(1\) 只能计数被选中的 \(\Gamma_i\)。若完整 varifold 为 \(V_i\)，还须写成

$$
V_i\lfloor B_R
=|\Gamma_i|\lfloor B_R+W_{i,R},
\qquad W_{i,R}\ge0,
\tag{6.4}
$$

并要求

$$
\|W_{i,R}\|(B_R)\longrightarrow0.
\tag{6.5}
$$

否则可只选择多图中的一张来计算 degree \(1\)，而遗漏 sheets 仍在 varifold 极限中产生额外重数。

## 7. 对 Wang Proposition 5.2 原证明的审查

Wang 在选取 Type-I 重标度切片后写道：曲率一致有界，高阶协变导数也一致有界，因而

$$
\Sigma^{\lambda_i}_{s_i}\longrightarrow\Sigma^\infty_{-1}
$$

光滑收敛。能量消失与 shrinker 方程给出

$$
H_\infty=0,
\qquad H_\infty+\frac12F_\infty^\perp=0,
\qquad \nabla\eta_\infty=0,
\tag{7.1}
$$

从而 \(F_\infty^\perp=0\)，极限支撑为线性平面 \(P\)。

### 7.1 可以严格得到的结论

曲率、高阶导数与局部面积控制允许在取子列后得到局部光滑**多图**收敛。若极限支撑连通，则完整积分 varifold 一般只能写成

$$
V^\infty_{-1}=m|P|,
\qquad m\in\mathbb N.
\tag{7.2}
$$

### 7.2 不能由支撑方程得到的结论

对每个 \(m\ge1\)，\(m|P|\) 都满足

$$
H=0,\quad F^\perp=0,\quad
H+\tfrac12F^\perp=0,\quad \nabla\eta=0.
$$

但二维平面的标准 Gaussian 质量为

$$
\int_P\frac1{4\pi}e^{-|x|^2/4}\,d\mathcal H^2=1,
$$

故

$$
\int\frac1{4\pi}e^{-|x|^2/4}\,d\|m|P|\|=m.
\tag{7.3}
$$

因此原文从“平面支撑”直接写到“multiplicity one”缺少独立 sheet-counting 论证。指出这个缺口并不等于构造出了满足 Wang 全部假设的有限时 Type-I 反例，也不等于证明 Proposition 5.2 的结论为假。

### 7.3 “每个近似切片嵌入”仍不够

第 4 节证明，嵌入单位密度切片可以在极限中形成 \(m\) 重覆盖。嵌入性排除同一个 \(i\) 中的实际重合，却不排除不同 sheets 的距离随 \(i\to\infty\) 趋于零。只有单图、degree \(1\) 或等价的全局 sheet-count 条件才能排除这种现象。

## 8. 对旧报告的审查结论

此前的 `huisken-sphere-codim2-normal-degree-wang-prop5-2-supplement-zh.pdf` 中下列部分正确并保留：

1. 光滑支撑与 varifold 重数必须分开；
2. Huisken 圆球的一重性来自一次参数化或凸性产生的 degree \(1\)；
3. proper、正 Jacobian、degree \(1\) 的法向投影在任意余维给出一张图；
4. residual-mass 与 Gaussian 尾部条件不可省略；
5. Wang 的平面支撑方程本身不决定 \(m\)。

本报告作以下严格修改：

1. 研究范畴固定为奇点前的经典嵌入平均曲率流；
2. 删除“可改用 unit-regular Brakke 正则性版本”的分支；
3. 明确 classical immersion 并不自动产生单位密度 varifold，故定理直接假设 \(F_t\) 嵌入；
4. 增加第 3、4 节反例，说明连通性、嵌入性、正 Kähler 角与各阶曲率界仍不自动给出一重；
5. 把“光滑收敛”明确写成完整局部多图收敛，并把次数一与剩余质量作为独立新增假设；
6. White 定理只在其经典 embedded spacetime 适用类别中使用。

## 9. Wang Proposition 5.2 的经典解严格补充版

### 定理 9.1（经典嵌入流、余二维次数一条件下的延拓）

设 \((M^4,g,J,\omega)\) 是紧致 Kähler 四维流形，\(\Sigma^2\) 是闭、连通、定向曲面，并设

$$
F:\Sigma\times[0,t_0)\longrightarrow M
$$

是经典平均曲率流，满足 \(\partial_tF=H\)，且每个 \(F_t\) 都是嵌入。令

$$
F_t^*\omega=\eta_t\,d\mu_t
$$

并假设

$$
\eta_t\ge\delta>0,
\qquad |A_t|^2\le\frac{C_I}{t_0-t}.
\tag{9.1}
$$

固定等距嵌入 \(\iota:M\hookrightarrow\mathbb R^N\)。令 \(F_{t_0}\) 为 Type-I 速度估计给出的连续终端映射，\(K=F_{t_0}(\Sigma)\)。假设对每个 \(y\in K\)，存在尺度 \(r_i\downarrow0\)、时刻 \(t_i=t_0-r_i^2\)，以及定向二维平面 \(P_y\subset T_yM\subset\mathbb R^N\)，使重标度嵌入切片

$$
M_i^y=r_i^{-1}
\bigl(\iota(F_{t_i}(\Sigma))-\iota(y)\bigr)
\tag{9.2}
$$

局部光滑地作为有限多图趋于支撑 \(P_y\)。记其单位密度 varifold 为 \(V_i^y=|M_i^y|\)。再假设：

1. **缓冲次数一。** 对每个 \(R>0\)，充分大的 \(i\) 存在定向嵌入源片 \(\Gamma_{i,R}^y\)，其法向投影
   $$
   p_{i,R}:\Gamma_{i,R}^y
   \longrightarrow D_{2R}^y:=P_y\cap B_{2R}(0)
   \tag{9.3}
   $$
   proper、局部微分同胚、保持定向且 \(\deg p_{i,R}=1\)；
2. **图收敛。** (9.3) 给出的秩 \(N-2\) 法向截面 \(u_{i,R}\) 在 \(D_{2R}^y\) 的紧子集上 \(C^1\) 趋于零；
3. **完整局部质量。** 在内球 \(B_R(0)\) 中存在非负 residual varifold \(W_{i,R}^y\)，使
   $$
   V_i^y\lfloor B_R
   =|\Gamma_{i,R}^y|\lfloor B_R+W_{i,R}^y,
   \qquad \|W_{i,R}^y\|(B_R)\to0;
   \tag{9.4}
   $$
4. **Gaussian 尾部紧性。** 对
   $$
   \rho_2(x)=\frac1{4\pi}e^{-|x|^2/4},
   $$
   有
   $$
   \lim_{R\to\infty}\sup_i
   \int_{\mathbb R^N\setminus B_R}
   \rho_2\,d\|V_i^y\|=0.
   \tag{9.5}
   $$

则存在 \(\varepsilon>0\) 及经典平均曲率流

$$
\overline F:\Sigma\times[0,t_0+\varepsilon)\longrightarrow M
$$

延拓 \(F\)。缩短 \(\varepsilon\) 后，每个 \(\overline F_t\) 仍是嵌入。证明只使用 White 对经典嵌入流的局部正则性，不使用一般 Brakke 流理论。

## 10. 定理 9.1 的无跳步证明

### 第一步：Type-I 速度给出紧终端像

对曲面，

$$
|H|\le\sqrt2|A|
\le\frac{\sqrt{2C_I}}{\sqrt{t_0-t}}.
$$

故 \(0\le s<t<t_0\) 时

$$
\sup_{p\in\Sigma}
d_M(F(p,t),F(p,s))
\le2\sqrt{2C_I}
\bigl(\sqrt{t_0-s}-\sqrt{t_0-t}\bigr).
\tag{10.1}
$$

所以 \(F_t\) 一致收敛到连续 \(F_{t_0}\)，且 \(K=F_{t_0}(\Sigma)\) 紧致。

### 第二步：次数一给出唯一向量值图

固定 \(y\in K\) 与 \(R\)。由定理 6.1，(9.3) 是微分同胚，所以

$$
\Gamma_{i,R}^y
=\{x+u_{i,R}(x):x\in D_{2R}^y\}.
\tag{10.2}
$$

虽然法向量有 \(N-2\) 个分量，degree 公式仍说明每条投影纤维恰有一点。

### 第三步：剩余质量消失给出单位平面

对支撑在 \(B_R\) 内的测试函数 \(\Phi\)，图的面积公式与 \(C^1\) 收敛给出

$$
|\Gamma_{i,R}^y|(\Phi)\longrightarrow|P_y|(\Phi).
$$

由 (9.4)，

$$
\bigl|V_i^y(\Phi)-|\Gamma_{i,R}^y|(\Phi)\bigr|
\le\|\Phi\|_\infty\|W_{i,R}^y\|(B_R)\to0.
$$

故

$$
V_i^y\longrightarrow|P_y|
\quad\text{局部 varifold 收敛}.
\tag{10.3}
$$

这一步才严格排除了 \(m\ge2\)。

### 第四步：局部收敛加尾部紧性给出 Gaussian 质量 \(1\)

先固定 \(R\)。在 \(B_R\) 中，(10.3) 与紧支撑逼近给出

$$
\int_{B_R}\rho_2\,d\|V_i^y\|
\longrightarrow
\int_{B_R\cap P_y}\rho_2\,d\mathcal H^2.
$$

由 (9.5) 令 \(R\to\infty\)，得到

$$
\lim_{i\to\infty}\int\rho_2\,d\|V_i^y\|
=\int_{P_y}\frac1{4\pi}e^{-|x|^2/4}\,d\mathcal H^2(x)=1.
\tag{10.4}
$$

只知道局部 varifold 收敛不足以推出 (10.4)，因为 Gaussian 质量可能随 \(i\) 逃向空间无穷远；这正是 (9.5) 的作用。

### 第五步：识别终端 Gaussian 密度

尺度变换 (9.2) 精确给出

$$
\int_{F_{t_0-r_i^2}(\Sigma)}
\frac1{4\pi r_i^2}
e^{-|\iota(x)-\iota(y)|^2/(4r_i^2)}\,d\mu_{t_i}
=\int\rho_2\,d\|V_i^y\|.
\tag{10.5}
$$

Riemannian 环境经固定等距嵌入后产生光滑有界的附加法向项；Wang Proposition 5.1 的局部单调性给出左端在 \(r\downarrow0\) 时的唯一极限。由 (10.4)-(10.5)，

$$
\Theta(y,t_0)=1.
\tag{10.6}
$$

### 第六步：White 的经典嵌入局部正则性

White 的 Riemannian-ambient 经典局部正则性给出 \(\varepsilon_W>0\)：若终端 Gaussian 密度小于 \(1+\varepsilon_W\)，则该终端点具有曲率受控的正则抛物邻域。由 (10.6)，每个 \(y\in K\) 都是经典正则点。这里应用的是奇点前由嵌入切片构成的 classical embedded spacetime；没有把任意积分 varifold 流代入 White 定理。

### 第七步：有限覆盖与经典延拓

每个 \(y\in K\) 有终端曲率受控邻域。紧致性给出有限子覆盖。由 (10.1)，充分晚的全部切片位于这些邻域的并中，因此

$$
\sup_{\Sigma\times[t_0-\tau,t_0)}|A|<\infty
$$

对某个 \(\tau>0\) 成立。早期紧时间区间本来光滑，故

$$
\sup_{\Sigma\times[0,t_0)}|A|<\infty.
\tag{10.7}
$$

平均曲率流的抛物内部估计从 (10.7) 给出所有 \(\nabla^qA\) 的一致界。标准闭流形短时间存在与曲率爆破判据于是排除 \(t_0\) 为最大经典存在时间，得到光滑延拓 \(\overline F\)。

最后说明嵌入性。光滑终端浸入 \(\overline F_{t_0}\) 的每个不同源点原像都会在小尺度 Gaussian 积分中至少贡献一个平面单位。由 (10.6)，每个像点只能有一个原像，所以 \(\overline F_{t_0}\) 单射；紧源单射浸入是嵌入。嵌入在紧源的 \(C^1\) 拓扑中是开条件，缩短正向时间便可保证 \(\overline F_t\) 继续嵌入。证毕。

## 11. Huisken 缩圆球为什么确实是一重

精确 round shrinking sphere 写成

$$
F(p,t)=r(t)p,
\qquad r(t)^2=2n(T-t).
$$

采用 \((2(T-t))^{-1/2}\) 重标度后

$$
\widetilde F(p,t)=\sqrt n\,p
$$

对所有 \(t<T\) 恒定。映射 \(p\mapsto\sqrt n\,p\) 是从固定 \(S^n\) 到极限球的单射微分同胚，面积公式每点只计一次。因此极限为单位重数球面。

Huisken 1984 的一般严格凸情形中，收缩点位于每个凸体内部，径向投影或 Gauss 映射是 degree \(1\) 微分同胚。这一全局次数信息排除多 sheets。Huisken 1990 Proposition 3.4 的一般光滑浸入紧性本身没有这项信息。

单位重数球形 shrinker 的 Gaussian 面积通常大于 \(1\)。只有单位重数静态平面的标准 Gaussian 质量等于 \(1\)。所以“multiplicity one”和“Gaussian density one”不能互换；在 Wang 证明中后者成立是因为极限支撑是平面。

## 12. 最终结论与 Danus 机器人配置

### 12.1 数学结论

1. 光滑嵌入流形是单位密度积分 varifold，但单位密度不在 varifold 极限下自动保持；
2. 一个连通经典嵌入平均曲率流可以在无限时间趋于 \(m\ge2\) 重 varifold；第 4 节给出了同时具有正 Kähler 角与全阶曲率界的显式例子；
3. 一张图给一重，\(m\) 张图或 \(m\) 重覆盖给 \(m\) 重；
4. 连通性、嵌入性和曲率各阶一致有界都不能替代 sheet-counting；
5. Wang 原文的 \(F^\perp=0\) 只决定平面支撑，不决定重数；
6. 在有限首奇异时刻的经典嵌入流中，增加 proper、正 degree-one 法向投影、residual-mass 穷尽和 Gaussian 尾部紧性后，Proposition 5.2 的延拓结论可严格证明；
7. 本报告没有构造满足 Wang 全部原始条件的有限时 Type-I 反例，因此结论是“原证明的 multiplicity 步骤需补充”，而不是“原命题已被反例推翻”。

### 12.2 Danus 调用明细

| 机器人类别 | 数量 | 实例标签 | 主要审计方向 |
|---|---:|---|---|
| `high` | 3 | `high`, `high2`, `high3` | 显式反例、经典延拓、Gaussian 尾部 |
| `xhigh` | 4 | `xhigh`, `xhigh2`, `xhigh3`, `xhigh4` | 任意余维次数、Wang 原文、White 适用性、压力测试 |
| **合计** | **7** | - | verifier 事实交叉检查 |

模型统一为 `gpt-5.6-sol`。代表性 verifier 事实包括：精确经典嵌入流反例 `a72a053e1531ea70`；余二维嵌入多覆盖反例 `41db58e809753849`；参数化覆盖与 varifold 极限 `b70c994807536c4b`；proper 正次数判据 `555450c7b5d7096f`；degree-one 加 residual-mass 定理 `e566cb33046417e0`；Gaussian 尾部必要性 `0778b13d727d8a12`；Wang multiplicity 步骤审计 `51d2e55d23e9fcf2`；经典解补充定理 `a0e1fdf544203483`。

## 参考文献

**[1]** G. Huisken, *Flow by Mean Curvature of Convex Surfaces into Spheres*, Journal of Differential Geometry **20** (1984), 237-266.

**[2]** G. Huisken, *Asymptotic Behavior for Singularities of the Mean Curvature Flow*, Journal of Differential Geometry **31** (1990), 285-299, Proposition 3.4.

**[3]** M.-T. Wang, *Mean Curvature Flow of Surfaces in Einstein Four-Manifolds*, Journal of Differential Geometry **57** (2001), 301-338, Proposition 5.2 and pp. 323-324; arXiv:math/0110019.

**[4]** B. White, *A Local Regularity Theorem for Mean Curvature Flow*, Annals of Mathematics **161** (2005), 1487-1519, Theorem 4.1 and Corollary 4.2.

**[5]** K. Smoczyk, *Mean Curvature Flow in Higher Codimension - Introduction and Survey*, in *Global Differential Geometry*, Springer Proceedings in Mathematics **17** (2012), 231-274; arXiv:1104.3222.
