# Huisken 命题 3.4 的完整证明

## 用 Langer 图系统补全局部紧性、重参数化与非空性细节

> **结论。** Huisken 1990 年论文 *Asymptotic Behavior for Singularities of the Mean Curvature Flow* 中的 Proposition 3.4 是正确的。原文引用 Langer [8] 的一句话可以严格补全，但不能把 Langer 的成品紧性定理原封不动地用于一般的 \(n\) 维超曲面：Langer 的定理陈述只处理 \(\mathbb R^3\) 中的二维曲面及 \(p>2\) 的 \(L^p\) 第二基本形式界。这里真正使用的是 Langer 证明中的**统一图半径、有限图系统、平均法向投影重参数化**。这些步骤本身与维数无关；Langer 用 Morrey 不等式产生图估计的部分，则由 Huisken Proposition 2.3 给出的逐点 \(C^\infty\) 曲率估计替代。
>
> **证明所得的准确结论。** 任意 \(s_j\to\infty\) 都有子列，使重标度超曲面在每个紧致环境区域内、经过与浸入结构相容的局部重参数化后，\(C^\infty\) 收敛到一个非空光滑浸入超曲面。结论不自动包含极限唯一性、嵌入性或单位重数，也不声称原来的固定参数映射 \(\widetilde F(\cdot,s_j):M\to\mathbb R^{n+1}\) 本身收敛。

**报告日期：** 2026 年 8 月 14 日

**核查材料：** Huisken 原文第 285--299 页，尤其 Proposition 2.3、Corollary 3.2、Lemma 3.3、Proposition 3.4；Langer 原文第 223--234 页，尤其 Lemmas 3.1--3.2、Theorem 3.3 及 Appendix Lemmas 5.1--5.7。

**验证方式：** Danus 分项核验 Gaussian 局部面积、proper-covering 图引理、全阶图估计、有限图系统、Hausdorff 商、重参数化及非空性后，选取七项相容事实固化为终审目标。

---

## 1. 命题、规范化与需要补上的缺口

设 \(M^n\) 是紧致无边界流形，

$$
F:M\times[0,T)\longrightarrow\mathbb R^{n+1}
$$

是最大光滑平均曲率流，\(T<\infty\)，并满足 Huisken 的第一类增长假设

$$
\max_{M_t}|A|^2\le \frac{C_0}{2(T-t)}.
\tag{1.1}
$$

把所考察的爆破点平移到原点，并令

$$
\widetilde F(p,s)
=\frac{1}{\sqrt{2(T-t)}}F(p,t),
\qquad
s=-\frac12\log(T-t).
\tag{1.2}
$$

记 \(f_s=\widetilde F(\cdot,s)\)、\(\widetilde M_s=f_s(M)\)，并始终把面积理解成参数域上的诱导测度；因此自交点处的不同原像分别计数。Huisken 的 Proposition 3.4 是：

> **命题 3.4。** 在 (1.1) 下，对每个 \(s_j\to\infty\)，存在子列 \(s_{j_k}\)，使 \(\widetilde M_{s_{j_k}}\) 光滑收敛到一个非空浸入极限超曲面 \(M_\infty\subset\mathbb R^{n+1}\)。

Huisken 原证明给出了三个输入：

1. Corollary 3.2 给出 Gaussian 加权面积的单调性；
2. 第一类界及 Proposition 2.3 给出 \(\widetilde A\) 的全部协变导数的一致界；
3. Lemma 3.3 给出不会逃向无穷远的基点。

随后原文写道“follow the method in [8]”，并提醒必须重参数化。需要补全的正是以下链条：

$$
\begin{gathered}
\text{加权面积界}
\Longrightarrow \text{每个环境球内的多重计数局部面积界},\\
|A|+|\nabla A|+\cdots\le C
\Longrightarrow \text{统一半径的 }C^\infty\text{ 图表示},\\
\text{局部面积界}+\text{统一图半径}
\Longrightarrow \text{每个球内只有有限多个必要图片},\\
\text{图系统收敛}+\text{Langer 投影}
\Longrightarrow \text{经过重参数化的局部 }C^\infty\text{ 收敛},\\
\text{缓冲球}+\text{对角子列}
\Longrightarrow \text{全空间中的浸入极限},\\
\text{有界基点}+\text{统一图半径}
\Longrightarrow M_\infty\ne\varnothing.
\end{gathered}
\tag{1.3}
$$

下文逐项证明。

## 2. “光滑浸入收敛”的准确含义

由于 \(f_s\) 的参数化可能沿 \(M\) 任意漂移，固定参数域上的 \(f_{s_j}\) 不必收敛。本文使用以下适合浸入的局部定义。

> **定义 2.1（图系统意义的局部光滑收敛）。** 设 \(f_j:N_j^n\to\mathbb R^{n+1}\) 是浸入。称 \(f_j\) 局部光滑收敛到 \(f_\infty:N_\infty^n\to\mathbb R^{n+1}\)，若对每个 \(R<\infty\)，在稍大的缓冲球 \(B_{R+\eta}\) 中可取有限多个源流形图片，并把每个浸入写成切平面上的图，使得：
>
> - 图函数在所有阶上一致收敛；
> - 真正来自同一源流形图片的交叠，其转移映射也在所有阶上一致收敛；
> - 没有源流形交叠的不同图片，即使其像在环境空间相交，也不作粘合；
> - 在 \(B_R\) 的核心区域，可用 Langer 型法向投影把这些图片拼成相容的局部重参数化。

这一定义保留了浸入的 sheet 资料。它比只要求像集合作 Hausdorff 收敛强得多，也不会把两个相交或重合的源流形层误认成同一层。若各 \(N_j=N\) 且所考察部分是紧致无边界的，上述局部重参数化可写成微分同胚 \(\phi_j\)，从而

$$
f_j\circ\phi_j\longrightarrow f_\infty
\quad\text{in }C^\infty_{\mathrm{loc}}.
\tag{2.1}
$$

在本命题的非紧极限情形，对每个环境球分别作此构造，再用相容的对角线粘合即可。

## 3. Gaussian 单调性推出局部面积界

定义

$$
\Phi(s)=\int_M e^{-|f_s|^2/2}\,d\mu_s.
\tag{3.1}
$$

Huisken Corollary 3.2 给出

$$
\frac{d}{ds}\Phi(s)
=-\int_M e^{-|f_s|^2/2}
\left|\widetilde{\mathbf H}+f_s^\perp\right|^2d\mu_s
\le0.
\tag{3.2}
$$

固定一个初始重标度时间 \(s_0\)。若 \(p\in f_s^{-1}(B_R(0))\)，则

$$
e^{-|f_s(p)|^2/2}\ge e^{-R^2/2}.
$$

因此

$$
\begin{aligned}
e^{-R^2/2}\,\mu_s\bigl(f_s^{-1}(B_R)\bigr)
&\le
\int_{f_s^{-1}(B_R)}e^{-|f_s|^2/2}\,d\mu_s\\
&\le \Phi(s)\le\Phi(s_0),
\end{aligned}
$$

即

$$
\boxed{
\mu_s\bigl(f_s^{-1}(B_R)\bigr)
\le A_R:=e^{R^2/2}\Phi(s_0).}
\tag{3.3}
$$

这里积分在 \(M\) 上进行，所以自交处的两张图分别贡献面积。这一点是后面控制图片数目的关键；若只计算像集合的 Hausdorff 测度，则不能控制浸入层数。

## 4. Huisken 的一致曲率导数界

缩放 (1.2) 把 (1.1) 变成

$$
|\widetilde A_s|^2\le C_0.
\tag{4.1}
$$

Huisken Proposition 2.3 进一步证明：对每个整数 \(m\ge0\)，存在仅依赖于初始流、\(C_0,m\) 的常数 \(\Lambda_m\)，使

$$
\sup_{M\times[s_0,\infty)}
|\widetilde\nabla^{\,m}\widetilde A_s|
\le\Lambda_m.
\tag{4.2}
$$

以下紧性论证所需的全部解析输入正是 (3.3) 和 (4.2)。

## 5. 统一图半径引理

> **引理 5.1（逐点曲率界产生统一图片）。** 设
> \(f:(N^n,g)\to\mathbb R^{n+1}\) 是完备无边界流形的光滑等距浸入且
> \(|A|\le K\)。令
>
> $$\ell=\frac1{4(K+1)},\qquad r_*=\frac{\ell}{2}=\frac1{8(K+1)},\qquad \alpha=\tan\frac14<1. \tag{5.1}$$
>
> 则对每个 \(q\in N\)，存在邻域 \(U_{r_*,q}\ni q\)，使得在把 \(f(q)\) 移到原点、把 \(T_qN\) 转到 \(\mathbb R^n\times\{0\}\) 后，
>
> $$f(U_{r_*,q})=\{(x,u_q(x)):x\in D_{r_*}\}. \tag{5.2}$$
>
> 其中 \(u_q(0)=0\)、\(Du_q(0)=0\)、\(|Du_q|\le\alpha\)。此处 \(U_{r_*,q}\) 是包含 \(q\) 的一张源流形图片；自交处的另一原像属于另一张图片，不影响结论。

**证明。** 记 \(P=T_{f(q)}f(N)\)，令 \(\pi_P\) 为到 \(P\) 的正交投影，并定义

$$
X(p)=\pi_P(f(p)-f(q)).
$$

若 \(p\in B_g(q,\ell)\)，由 Hopf--Rinow 定理可取从 \(q\) 到 \(p\) 的单位速度最短测地线 \(\gamma:[0,L]\to N\)。沿 \(\gamma\) 连续选择法向。Weingarten 公式给出

$$
\left|\frac{D\nu}{dt}\right|
\le |A|\le K.
\tag{5.3}
$$

故 \(T_pN\) 与 \(P\) 的夹角至多

$$
\theta(p)\le KL<K\ell\le\frac14.
\tag{5.4}
$$

因此 \(dX_p=\pi_P\circ df_p\) 的最小奇异值至少为 \(\cos(1/4)>0\)，所以 \(X\) 在整个 \(B_g(q,\ell)\) 上是局部微分同胚。

下一步排除所选分支在内蕴球边界处终止。若 \(d_g(q,p)=\ell\)，取单位速度最短测地线 \(\gamma:[0,\ell]\to N\)，并令 \(x(t)=X(\gamma(t))\)。Gauss 公式和 \(\nabla_{\gamma'}\gamma'=0\) 给出

$$
x''(t)=\pi_P A(\gamma',\gamma'),
\qquad |x''(t)|\le K.
\tag{5.5}
$$

又 \(x(0)=0\)，而 \(x'(0)\in P\) 是单位向量。积分两次得

$$
\begin{aligned}
|X(p)|
&\ge \ell-\int_0^\ell(\ell-t)|x''(t)|\,dt\\
&\ge \ell-\frac12K\ell^2
\ge\frac78\ell>\frac\ell2=r_*.
\end{aligned}
\tag{5.6}
$$

令

$$
U_{r_*,q}
=\text{\(q\)-所在的 }
\bigl(B_g(q,\ell)\cap X^{-1}(D_{r_*})\bigr)
\text{ 的连通分支}.
\tag{5.7}
$$

映射 \(X:U_{r_*,q}\to D_{r_*}\) 是 proper。事实上，若
\(C\Subset D_{r_*}\) 且 \(p_i\in U_{r_*,q}\)、\(X(p_i)\in C\)，则闭内蕴球
\(\overline{B_g(q,\ell)}\) 由 Hopf--Rinow 定理是紧的。取收敛子列
\(p_i\to p\)。式 (5.6) 排除 \(p\in\partial B_g(q,\ell)\)；而连通分支在开集
\(B_g(q,\ell)\cap X^{-1}(D_{r_*})\) 中相对闭，故 \(p\in U_{r_*,q}\)。

proper local diffeomorphism 是覆盖映射。其像在连通圆盘 \(D_{r_*}\) 中既开又闭且非空，故像等于整个圆盘；因 \(D_{r_*}\) 单连通而 \(U_{r_*,q}\) 连通，该覆盖只有一层。因此 \(X|_{U_{r_*,q}}\) 是微分同胚。用其逆映射分解 \(f-f(q)\) 的 \(P\) 分量与法向分量，便得到 (5.2)。式 (5.4) 给出

$$
|Du_q|\le\tan(1/4)=\alpha.
$$

在本题中 \(N=M\) 紧致，因而完备；所以引理完全适用。证毕。

**说明。** 该证明不要求 \(f\) 嵌入。若 \(f(q)=f(q')\) 而 \(q\ne q'\)，就分别得到 \(U_{r_*,q}\) 与 \(U_{r_*,q'}\)；二者在源流形上仍是不同层。

## 6. 图函数的全部高阶估计

> **引理 6.1。** 在引理 5.1 的坐标中，若
>
> $$|\nabla^mA|\le\Lambda_m,\qquad 0\le m\le a. \tag{6.1}$$
>
> 则对任意 \(0<r'<r_*\)，有
>
> $$\|u_q\|_{C^{a+2}(D_{r'})}\le C(n,a,r_*-r',\alpha,\Lambda_0,\ldots,\Lambda_a). \tag{6.2}$$
>
> 在本题中可固定例如 \(r'=3r_*/4\)，故所有常数与 \(q,s\) 无关。

**证明。** 对超曲面图 \(X(x)=(x,u(x))\)，有

$$
g_{ij}=\delta_{ij}+u_i u_j,
\qquad
\nu=\frac{(-Du,1)}{\sqrt{1+|Du|^2}},
\qquad
h_{ij}=\frac{u_{ij}}{\sqrt{1+|Du|^2}}.
\tag{6.3}
$$

由于 \(|Du|\le\alpha\)，\(g\) 与 Euclidean 度量一致等价，\(g^{-1}\) 及 \((1+|Du|^2)^{\pm1/2}\) 的全部代数组合均有一致界。由 (6.3)，

$$
|D^2u|\le C(n,\alpha)|A|.
\tag{6.4}
$$

Christoffel 符号满足

$$
\Gamma_{ij}^{k}
=g^{k\ell}u_\ell u_{ij},
\tag{6.5}
$$

而

$$
(\nabla_kh)_{ij}
=\partial_kh_{ij}
-\Gamma_{ki}^{\ell}h_{\ell j}
-\Gamma_{kj}^{\ell}h_{i\ell}.
\tag{6.6}
$$

把 (6.3) 代入 (6.6)，最高阶项是

$$
\frac{u_{ijk}}{\sqrt{1+|Du|^2}},
$$

其余都是 \(Du,D^2u\) 的光滑多项式组合。一般地，反复微分可得

$$
\nabla^mA
=Q_m(Du)D^{m+2}u
+P_m(Du,D^2u,\ldots,D^{m+1}u),
\tag{6.7}
$$

其中 \(Q_m(Du)\) 是一致可逆的线性系数，\(P_m\) 只含低阶导数。以 (6.4) 为归纳起点，(6.7) 逐阶解出 \(D^{m+2}u\)，得到 (6.2)。取内部小圆盘只是为了在改变图中心或比较交叠坐标时保留缓冲；公式本身在原图定义域内逐点成立。证毕。

由 (4.2) 和引理 6.1，所有 \(f_s\) 都是具有同一 \(r_*,\alpha\) 和同一组 \(C^a\) 常数的 \(C^\infty\) 图浸入。

## 7. Langer 的有限网与局部图片数

本节把 Langer Lemmas 3.1--3.2 改写到 \(n\) 维，并把全局面积界替换成环境球内的多重计数面积界。

对 \(0<r\le r_*\)，把 \(U_{r,q}\) 定义为
\(B_g(q,\ell)\cap X_q^{-1}(D_r)\) 的 \(q\)-连通分支。引理 5.1 的
proper-covering 证明对每个这样的 \(r\) 原样成立，所以它正是同一图分支的半径
\(r\) 子图。图斜率界给出

$$
p\in U_{r,q}
\quad\Longrightarrow\quad
|f(p)-f(q)|\le\sqrt{1+\alpha^2}\,r.
\tag{7.1}
$$

若 \(\alpha^2<1/2\)，则

$$
U_{r/4,p}\cap U_{r/4,q}\ne\varnothing
\quad\Longrightarrow\quad
U_{r/4,p}\subset U_{r,q}.
\tag{7.2}
$$

事实上，若 \(z\in U_{r/4,p}\)，并取
\(y\in U_{r/4,p}\cap U_{r/4,q}\)，则图内径向线段的长度至多为
\(\sqrt{1+\alpha^2}\) 乘以底圆盘线段长度。因此可在两个小图片之并中用三段曲线从 \(q\) 走到 \(z\)，总内蕴长度小于
\(3\sqrt{1+\alpha^2}\,r/4<r\)。同时由三角不等式和 (7.1)，

$$
|f(z)-f(q)|
<3\sqrt{1+\alpha^2}\frac r4<r.
\tag{7.3}
$$

所以两小图片之并既包含在 \(B_g(q,\ell)\) 中，也包含在
\((\pi_{T_q}\circ(f-f(q)))^{-1}(D_r)\) 中；它又在源流形中连通且含
\(q\)，故位于定义 \(U_{r,q}\) 的那个连通分支内。这正是 Langer
Lemma 3.1(b) 的证明；维数没有进入论证。

现在固定 \(R\) 及 \(0<\delta<r_*/4\)。在 \(f_s^{-1}(B_R)\) 内贪心选点：先取 \(q_1\)；若尚未被 \(U_{\delta,q_1},\ldots,U_{\delta,q_k}\) 覆盖，则取

$$
q_{k+1}\notin\bigcup_{i=1}^kU_{\delta,q_i}.
$$

由 (7.2)，小图片 \(U_{\delta/4,q_i}\) 在源流形上两两不交。每个小图片是斜率有界的 \(n\) 维图，故

$$
\mu_s(U_{\delta/4,q_i})
=\int_{D_{\delta/4}}\sqrt{\det(I+Du^TDu)}\,dx
\ge\omega_n(\delta/4)^n.
\tag{7.4}
$$

并且由 (7.1)，这些图片的像都在

$$
B_{R+c_\alpha\delta},
\qquad c_\alpha=\frac14\sqrt{1+\alpha^2},
$$

内。结合 (3.3)，所选点数满足

$$
N_R
\le
\frac{A_{R+c_\alpha\delta}}
{\omega_n(\delta/4)^n}.
\tag{7.5}
$$

右端与 \(s\) 无关。因此贪心过程必在有限步停止，并得到覆盖 \(f_s^{-1}(B_R)\) 的 \(\delta\)-网。注意，(7.4) 在参数域上求面积，故即使若干小图片的像重合，它们仍分别占用面积预算。

## 8. 有限图系统的子列紧性

在 \(B_R\) 外再留一个固定缓冲层，先对 \(f_s^{-1}(B_{R+2\eta})\) 作第 7 节的有限网。给每个中心 \(q_i^s\) 记录：

1. 平移 \(f_s(q_i^s)\) 及把 \(T_{q_i^s}M\) 转成水平面的正交标架 \(A_i^s\in O(n+1)\)；
2. 图函数 \(u_i^s:D_{r_*}\to\mathbb R\)；
3. 源流形图片的交叠指标

$$
Z_i^s=\{k:U_{\delta/4,q_i^s}\cap
U_{\delta/4,q_k^s}\ne\varnothing\};
\tag{8.1}
$$

4. 真正交叠处的坐标转移映射。

由 (7.5)，图片数有统一上界。补入空指标并取子列，可假定图片数固定为 \(N_R\)。中心位于一个固定紧球内，\(O(n+1)\) 紧；有限集合 \(Z_i^s\) 只有有限种可能。因此再次取子列，可令中心、标架收敛，所有 \(Z_i^s\) 稳定。

引理 6.1 给出图函数的全部一致导数界。在严格较小的同心圆盘上逐阶使用 Arzelà--Ascoli 并作对角选取，可得

$$
u_i^{s_j}\longrightarrow u_i^\infty
\quad\text{in }C^\infty_{\mathrm{loc}}(D_{r_*}).
\tag{8.2}
$$

转移映射由两个浸入图坐标的等式决定；在斜率小于 \(\alpha<1\) 的紧子圆盘上，其 Jacobian 一致可逆。故逆函数定理和 (8.2) 也给出所有转移映射的 \(C^\infty\) 收敛。极限转移映射保留恒等式、逆映射及三重交叠的 cocycle 关系，因为这些关系在每个 \(j\) 上成立并可逐项取极限。

为把 Hausdorff 性也写清楚，改在严格较小的闭核心圆盘上操作，并在有限个
核心圆盘的不交并上定义

$$
(x,i)\sim(y,k)
\quad\Longleftrightarrow\quad
k\in Z_i\ \text{且}\ X_i^\infty(x)=X_k^\infty(y),
\tag{8.3a}
$$

其中 \(X_i^\infty\) 是第 \(i\) 张极限环境图。反身性、对称性显然；
传递性来自 (7.2) 的缓冲包含：若第 \(i\)、\(k\) 图以及第 \(k\)、
\(l\) 图在小核心上对应同一源点，则中间小图都包含于同一个放大后的
\(i\)-图分支，故 \(i,l\) 的转移关系也存在。这个包含关系在取极限后仍成立。

商投影是开映射，因为交叠处一个图到另一个图的切平面投影是局部微分同胚。
两个不同商点若标签不交叠，可用不相交的标签邻域分离；若标签交叠但商点
不同，则其环境图值不同，连续性给出保持正距离的乘积邻域。故商空间
Hausdorff。有限个 Euclidean 圆盘的不交并是第二可数的，而开商仍第二可数。
交叠坐标变换是一个极限图到另一个底平面的正交投影，其微分因小斜率界
一致可逆。因此该商带有光滑流形结构，且公式
\(f_{\infty,R}([x,i])=X_i^\infty(x)\) 定义一个光滑浸入：

$$
f_{\infty,R}:N_{\infty,R}\longrightarrow B_{R+\eta}.
\tag{8.3}
$$

这里必须强调：只有 \(Z_i^s\) 所记录的**源流形交叠**才粘合。若两个不相交的源图片在环境空间自交，二者不在 \(Z_i^s\) 中，极限中仍是两张不同的浸入层。这排除了把 immersion 错换成无重数集合的常见错误。

## 9. Langer 型平均法向投影与重参数化

仅有图函数列表还不足以说明原浸入经过重参数化收敛。本节给出 Langer 第 3 节和附录在当前 \(C^\infty\) 情形中的完整核心论证。

> **引理 9.1（有缓冲的局部 Langer 投影）。** 设 \(f\) 与 \(\bar f\) 有相同的有限交叠图系统，图斜率至多 \(\alpha<1/4\)，并且相应中心、标架、图函数在 \(C^{a+1}\) 中相差至多 \(\varepsilon\)。在每个图片的半径 \(r_*/2\) 核心上，若 \(\varepsilon\) 足够小，则存在与交叠相容的光滑局部微分同胚
>
> $$\phi:\text{\(f\) 的核心源区域}\longrightarrow\text{\(\bar f\) 的对应源区域}.$$
>
> 使
>
> $$\|\bar f\circ\phi-f\|_{C^a}\le C_a\varepsilon. \tag{9.1}$$

**构造与证明。** 先假设法向线丛可定向。对源点 \(q\)，令

$$
\mathcal I(q)=\{i:q\text{ 属于第 }i\text{ 张源流形图片}\}.
$$

这里的指标由**源流形交叠**决定，而不是由环境像的距离决定；因此无关的自交
sheet 不会参与平均。取从这些局部单位法向通过光滑分割函数加权、再归一化所得的近似法向 \(X\)。Langer 的选择可写成

$$
S(q)=\sum_{i\in\mathcal I(q)}
g\!\left(\frac{|f(q)-f(q_i)|^2}{r_*^2}\right)\nu_i,
\qquad
X(q)=\frac{S(q)}{|S(q)|},
\tag{9.2}
$$

其中 \(g=1\) 于 \([0,1/4]\)、\(g=0\) 于 \([1,\infty)\)，而 \(\nu_i\) 是中心法向。因为同一图片内所有法向与 \(\nu_i\) 的夹角为 \(O(\alpha)\)，所有参与加权的法向都在同一开半球内，故

当 \(q\) 走到第 \(i\) 张图的边界时，其切平面投影半径已达到
\(r_*\)，从而该项的权恰为零；所以 (9.2) 在
\(\mathcal I(q)\) 改变处仍光滑。另一方面，每个核心点至少属于一张权为
1 的小图，因此分母不会消失。综上，

$$
|S|\ge c>0,
\qquad
|X-\nu_f|\le C\alpha.
\tag{9.3}
$$

在一个相应图坐标中，先用图系统中的对应 Euclidean 刚性变换把
\(\bar f\) 的底平面、中心搬到 \(f\) 的底平面、中心；两个刚性变换的
\(C^{a+1}\) 差也是 \(O(\varepsilon)\)，可吸收到下列估计。于是写

$$
f(x)=(x,u(x)),
\qquad
\bar f(y)=(y,v(y)),
$$

并写 \(X=(X_T,X_N)\)。寻找直线

$$
\ell_x(t)=f(x)+tX(x)
$$

与 \(\bar f\) 对应图片的交点，等价于解标量方程

$$
G(x,t)
=u(x)+tX_N(x)
-v\bigl(x+tX_T(x)\bigr)=0.
\tag{9.4}
$$

由 (9.3) 和小斜率界，

$$
\partial_tG
=X_N-Dv\cdot X_T\ge c_0>0.
\tag{9.5}
$$

而 \(G(x,0)=u(x)-v(x)=O(\varepsilon)\)。对核心 \(D_{r_*/2}\)，缓冲宽度保证当 \(|t|\le C\varepsilon\) 时 \(x+tX_T(x)\in D_{3r_*/4}\)。介值定理给出一个根，(9.5) 给出唯一性；隐函数定理给出光滑函数 \(T(x)\)，且

$$
\|T\|_{C^a}\le C_a\varepsilon.
\tag{9.6}
$$

令

$$
\psi(x)=f(x)+T(x)X(x),
$$

并把 \(\phi(x)\) 定义为 \(\bar f\) 对应源图片中满足

$$
\bar f(\phi(x))=\psi(x)
\tag{9.7}
$$

的唯一点。若 \(x\) 同时属于两个真正交叠的源图片，稳定的交叠资料保证两个候选点都位于 \(\bar f\) 的同一个交叠源分支；它们又都是同一直线与该小斜率图的交点，故由 (9.5) 的唯一性相同。这就是 Langer Lemma 5.4 的粘合机制。若只是环境像相交而源图片不交叠，则按照图系统资料选择各自的对应源分支，不把两点混同。

对 (9.7) 微分，

$$
D(\bar f\circ\phi)
=Df+DT\otimes X+T\,DX.
\tag{9.8}
$$

由 (9.6)，右端与 \(Df\) 在 \(C^{a-1}\) 中相差 \(O(\varepsilon)\)。因 \(Df\) 满秩，\(\varepsilon\) 小时 \(\phi\) 是局部微分同胚；反复微分 (9.4) 得到 (9.1)。若源核心是完整紧致无边界流形，\(\phi\) 是覆盖映射，并因其在每个图坐标中接近恒等映射而具有一层，故为微分同胚。对于有边界的局部区域，只在远离边界的核心使用它，这就是必须引入缓冲球的原因。

局部构造也没有遗漏目标核心中的 sheet。映射

$$
\mathcal E(x,t)=f(x)+tX(x)
$$

在 \(t=0\) 处的微分把 \(n\) 个切向方向与一个一致横截的 \(X\) 方向
送到环境空间的一组基；在紧核心上，定量逆函数定理给出统一管状坐标。
有限网的更小图片覆盖 \(\bar f^{-1}(B_R)\)，而相应目标图与参考图的
\(C^1\) 距离足够小，所以目标核心中的每一点都在某个这样的管状坐标
中，并唯一写成 \(\mathcal E(x,t)\)。这给出 \(\phi\) 在核心上的逆；
故适当收缩后，\(\phi\) 是到对应目标核心并集的微分同胚，而非仅仅一个
单射局部图。

若浸入非两侧，可在法向定向双覆盖上构造 (9.2)。全部直线只依赖无向法线，数据可取为 deck 变换等变，因而构造下降到原流形。引理得证。

现在把引理应用于第 8 节的 \(C^\infty\)-Cauchy 图系统。先选一个足够靠后的参考指标
\(j_0\)，使其图系统与所有 \(j\ge j_0\) 的图系统之差都小于保证
(9.5) 的阈值。把参考核心沿 \(X\) 投影到每个 \(f_{s_j}\)，得到
\(\phi_j\)。方程 (9.4) 的系数随中心、标架和图函数在所有阶上收敛；
又因 \(\partial_tG\ge c_0\)，隐函数定理的带参数版本说明
\(T_j\) 及

$$
f_{s_j}\circ\phi_j=f_{s_{j_0}}+T_jX
$$

在每个较小核心上 \(C^\infty\) 收敛。参考系统与极限的距离不必等于
零；只需小到保证投影唯一且极限仍为浸入。对图片、导数阶数和环境球作
对角选取，即得 \(C^\infty\) 局部收敛。这个步骤精确解释了 Huisken 原文最后一句“it will be necessary to reparametrize”。

## 10. 球边界、对角子列与全局极限

直接在 \(B_R\) 截断会遇到图片与 \(\partial B_R\) 相切、截断源区域边界不光滑等无关紧要但真实的技术问题。解决办法是始终在较大球中构造、在较小球中下结论。

取

$$
R_m=m,
\qquad
\eta>2r_*\sqrt{1+\alpha^2}.
$$

先在 \(B_{R_1+2\eta}\) 中取子列并构造极限，在 \(B_{R_1}\) 的核心得到重参数化收敛；再从该子列中选子列，在 \(B_{R_2+2\eta}\) 中重复。如此得到嵌套子列

$$
\mathcal S_1\supset\mathcal S_2\supset\cdots.
$$

取对角子列。第 \(m+1\) 步只是第 \(m\) 步子列的进一步选取，因此在 \(B_{R_m}\) 上仍收敛到原来的极限图系统。若构造中使用不同中心，可由引理 9.1 的唯一法向交点在较小核心上给出规范识别；cocycle 关系保证这些识别相容。于是局部极限可粘成光滑流形 \(N_\infty\) 及浸入

$$
f_\infty:N_\infty\longrightarrow\mathbb R^{n+1}.
\tag{10.1}
$$

并且

$$
f_{s_{j_k}}\longrightarrow f_\infty
\quad\text{局部光滑地收敛，经过上述局部重参数化。}
\tag{10.2}
$$

每个紧球内只需要由 (7.5) 控制的有限多个图片，故极限在紧环境集内局部有限；缓冲图片的闭核心是紧的。这也说明构造不会在一个紧球内凭空产生无限多个未被记录的 sheets。Proposition 3.4 本身只需要 (10.2)，无需额外宣称极限嵌入或单位重数。

## 11. 极限非空

Huisken Lemma 3.3 断言：若原点是爆破点，则存在固定 \(p_0\in M\) 和常数 \(L<\infty\)，使

$$
|f_s(p_0)|\le L
\qquad(s\text{ 充分大}).
\tag{11.1}
$$

对给定序列 \(s_j\to\infty\)，取子列使

$$
f_{s_j}(p_0)\longrightarrow x_\infty\in\overline{B_L},
$$

并使切平面标架收敛。以 \(p_0\) 为中心的图片具有与 \(j\) 无关的半径 \(r_*\)、斜率界和全部高阶导数界。由 Arzelà--Ascoli，再取子列后其图函数光滑收敛到定义在 \(D_{r_*}\) 上的图 \(u_\infty\)，且图中心就是 \(x_\infty\)。因此 \(x_\infty\in f_\infty(N_\infty)\)，并且事实上有一整张正半径图片存活：

$$
M_\infty\ne\varnothing.
\tag{11.2}
$$

仅仅说“有一个点有界”而没有统一图半径，还不足以排除极限退化；这里非空性严格依赖 Lemma 3.3 与引理 5.1、6.1 的合用。

## 12. Proposition 3.4 的合并证明

**证明。** 任取 \(s_j\to\infty\)。Corollary 3.2 通过 (3.3) 给出每个 \(B_R\) 内按源原像计数的一致面积界。第一类假设及 Proposition 2.3 通过 (4.1)--(4.2) 给出第二基本形式全部协变导数的一致界。

由引理 5.1，每个点都有共同半径 \(r_*\) 和共同斜率界的图表示；由引理 6.1，图函数具有全部阶的一致估计。Langer 的交叠引理及有限网论证，即 (7.1)--(7.5)，说明每个固定缓冲球内只需有限多个图片，而且数目与 \(j\) 无关。对有限图系统使用 Arzelà--Ascoli，并保留源流形交叠与转移映射，得到 \(C^\infty\) 极限图系统。

引理 9.1 的平均法向投影把图系统收敛提升为经过相容局部重参数化的浸入光滑收敛。使用缓冲球消除 \(\partial B_R\) 的截断问题，再对 \(R\to\infty\) 取嵌套对角子列，得到光滑浸入极限 \(f_\infty:N_\infty\to\mathbb R^{n+1}\)。最后由 Lemma 3.3 选到有界基点；其统一大小的图片在极限中存活，故 \(N_\infty\) 非空。证毕。

## 13. Langer 原定理的维数与 \(p>2\) 问题

必须把“引用 Langer”解释准确。

| 项目 | Langer 1985 | Huisken Proposition 3.4 中的替代 |
|---|---|---|
| 维数与余维 | 二维曲面 \(M^2\to\mathbb R^3\) | \(n\) 维超曲面 \(M^n\to\mathbb R^{n+1}\) |
| 曲率输入 | \(\int|II|^p\le E,\ p>2\) | \(\sup|\nabla^mA|\le\Lambda_m\) 对所有 \(m\) |
| 产生小斜率图 | \(p>2\) 的 Morrey 控制 | 引理 5.1 的逐点 Gauss 映射控制 |
| 图紧性 | \(L_{2,p}\hookrightarrow C^1\) | 全部 \(C^a\) 界与 Arzelà--Ascoli |
| 图片数 | 全局面积界 | 每个缓冲球内的局部面积界 (3.3) |
| 重参数化 | 平均法向投影 | 同一构造，见引理 9.1 |

所以，严格的说法不是“Langer 的 Compactness Theorem 直接适用”，而是：

> Langer 第 3 节及附录的图系统和重参数化机制，在已有统一小斜率 \(C^\infty\) 图片的条件下是维数无关的；把二维圆盘 \(D_r\subset\mathbb R^2\) 换成 \(n\) 维球 \(D_r\subset\mathbb R^n\)，把面积下界 \(\pi r^2\) 换成 \(\omega_n r^n\)，其余有限网、交叠、隐函数及覆盖论证不变。

这也解释了为什么不能把 Langer 的 \(p>2\) 条件机械地写成一般维数仍为 \(p>2\)：若只从 \(L^p\) 曲率界出发，一般维数对应的 Morrey 阈值应与 \(n\) 比较；但本题不走这条路，因 Huisken 已给出远强于它的逐点全阶估计。

## 14. 该证明没有给出的结论

为防止把紧性结论误用为更强的几何结论，列出四个否定项。

1. **没有固定参数收敛。** \(f_{s_j}:M\to\mathbb R^{n+1}\) 可因切向漂移而不收敛；必须使用第 9 节的重参数化。
2. **没有嵌入性。** 每个 \(f_{s_j}\) 即便嵌入，局部光滑浸入紧性本身也未自动给出全局极限嵌入；不同远处源点可能在极限靠拢。若要排除，需额外的一致单层或分离估计。
3. **没有单位 varifold 重数。** 图系统收敛保留每张源流形层，但若若干不同层的像趋向同一几何支撑，作为 varifold 观察时可能出现高重数。Proposition 3.4 只产生光滑浸入极限，不独立解决一重性。
4. **没有极限唯一性。** 不同 \(s_j\to\infty\) 可能给出不同子列极限；Huisken 在 Proposition 3.5 后明确把唯一性列为进一步问题。

这些限制不影响 Proposition 3.4，也说明为什么完整证明必须保存源图片交叠数据，而不能只讨论像集合。

## 15. 审计结论

Huisken 原文的证明框架是正确的；被压缩进“follow the method in [8]”的内容可以由 Langer 的方法严格补齐。证明的逻辑核心是：

$$
\boxed{
\begin{aligned}
&\text{Huisken 单调性}
&&\Rightarrow\text{紧球内多重计数面积界},\\
&\text{Type-I + 抛物正则性}
&&\Rightarrow\text{统一 }C^\infty\text{ 图片},\\
&\text{Langer 有限网}
&&\Rightarrow\text{有限图系统},\\
&\text{Langer 法向投影}
&&\Rightarrow\text{重参数化后的光滑收敛},\\
&\text{缓冲球对角线 + 有界基点}
&&\Rightarrow\text{全局非空浸入极限}.
\end{aligned}}
$$

因此 Proposition 3.4 在其原假设下成立；同时，严格证明所支持的恰是“非空光滑浸入子列极限”，而不是嵌入、一重或唯一极限。

## 参考文献

1. G. Huisken, *Asymptotic Behavior for Singularities of the Mean Curvature Flow*, Journal of Differential Geometry **31** (1990), 285--299，尤其 Proposition 2.3、Corollary 3.2、Lemma 3.3、Proposition 3.4。
2. J. Langer, *A Compactness Theorem for Surfaces with \(L_p\)-Bounded Second Fundamental Form*, Mathematische Annalen **270** (1985), 223--234，尤其 Sections 2--3 与 Appendix。
