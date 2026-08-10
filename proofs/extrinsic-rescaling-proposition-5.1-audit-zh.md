# 曲率归一化移动中心缩放下 Proposition 5.1 的严格审计与修正版

## 摘要

本文比较两种本质不同的 parabolic rescaling。Han--Li--Sun 在证明 Proposition 5.1 时固定终止时空点 \((X_0,T)\)，而 Andrews--Chow--Guenther--Langford 在 *Extrinsic Geometric Flows* 印刷页 369 使用曲率归一化的移动中心

$$
X_j(x,t)=\lambda_j\Bigl(X(x,t_j+\lambda_j^{-2}t)-X(x_j,t_j)\Bigr),
\qquad \lambda_j=H(x_j,t_j).
$$

直接把后一参数化代入 Proposition 5.1 并宣称四个局部 spacetime \(L^2\) 积分全部趋于零，并不是一个无条件成立的结论。普通 mean curvature flow 的 shrinking sphere 给出严格反例；更一般地，任何保留 \(|H_\infty|(0,0)=1\) 的 smooth pointed blow-up limit 都与第一个消失极限冲突。

对于 Han--Li--Sun 的 beta-symplectic gradient flow，本文不给出不存在于已知假设中的反例，而是精确证明可从 fixed-center Proposition 5.1 推出的最强自然修正版。令

$$
q_j=\lambda_j\bigl(F(x_j,t_j)-X_0\bigr),
\qquad
\theta_j=\lambda_j^2(T-t_j).
$$

若 \(q_j\) 与 \(\theta_j\) 有界，则 \(H_j,V_j,f_j\) 的三个移动中心局部 \(L^2\) 极限成立；第四个 \(F_j^\perp\) 极限还需要 \(q_j^\perp\) 的局部 \(L^2\) 贡献趋于零。特别地，\(q_j\to0\) 加上局部 spacetime area bound 足以保证第四个极限。整个论证不使用 Han--Li--Sun 的 moving-cutoff 公式 (5.5)。

## 1. 两种缩放与目标命题

设 \(F:\Sigma\times[0,T)\to M\) 是二维 beta-symplectic critical-surface gradient flow。在局部 normal coordinates 中写成

$$
\partial_\tau F=f,
\qquad
f=\frac{\cos^2\alpha\,H-\beta\sin^2\alpha\,V}
        {\cos^2\alpha+\beta\sin^2\alpha},
$$

其中 \(H\) 是 mean-curvature vector，\(V\) 是 Han--Li--Sun 公式中的 normal field，\(\alpha\) 是 Kähler angle，并假设 symplectic-angle bound

$$
\cos\alpha\geq\delta>0.
$$

Han--Li--Sun 使用固定时空中心 \((X_0,T)\)：

$$
G_\lambda(x,u)=\lambda\bigl(F(x,T+\lambda^{-2}u)-X_0\bigr),
\qquad u<0.
$$

其 Proposition 5.1 断言：对任意 \(R>0\) 和任意有限区间 \(-\infty<a<b<0\)，当 \(\lambda\to\infty\) 时，以下四个积分均趋于零：

$$
\int_a^b\int_{\Sigma_u^\lambda\cap B_R(0)}
|H_\lambda|^2\,d\mu_u^\lambda\,du,
\quad
\int_a^b\int_{\Sigma_u^\lambda\cap B_R(0)}
|V_\lambda|^2\,d\mu_u^\lambda\,du,
$$

$$
\int_a^b\int_{\Sigma_u^\lambda\cap B_R(0)}
|f_\lambda|^2\,d\mu_u^\lambda\,du,
\quad
\int_a^b\int_{\Sigma_u^\lambda\cap B_R(0)}
|G_\lambda^\perp|^2\,d\mu_u^\lambda\,du.
$$

书第 369 页使用的则是移动中心、曲率归一化缩放。取 \(x_j\in\Sigma\)、\(t_j\nearrow T\)，令

$$
p_j=F(x_j,t_j),
\qquad
\lambda_j=|H|(x_j,t_j)\longrightarrow\infty,
$$

并定义

$$
F_j(x,t)=\lambda_j\Bigl(F(x,t_j+\lambda_j^{-2}t)-p_j\Bigr).
\tag{1.1}
$$

在允许的 rescaled time interval 中，

$$
F_j(x_j,0)=0,
\qquad
|H_j|(x_j,0)=1.
\tag{1.2}
$$

问题是：(1.1) 是否仍对每个固定 \(R>0\) 与 \(s_1<s_2<0\) 给出与 Proposition 5.1 完全相同的四个消失极限？

## 2. 精确 scaling identities

令

$$
\tau_j(t)=t_j+\lambda_j^{-2}t.
$$

translation 不改变 tangent 和 normal spaces，ambient dilation \(y\mapsto\lambda_j y\) 将 induced metric 乘以 \(\lambda_j^2\)。因为 \(\Sigma\) 为二维，得到

$$
g_j=\lambda_j^2g,
\qquad
d\mu_t^j=\lambda_j^2d\mu_{\tau_j(t)},
\qquad
d\tau=\lambda_j^{-2}dt.
\tag{2.1}
$$

second fundamental form 与 inverse metric 的缩放给出

$$
H_j=\lambda_j^{-1}H.
\tag{2.2}
$$

Kähler angle 在正 dilation 下不变；scaled orthonormal tangent frame 作为微分算子多出 \(\lambda_j^{-1}\)，所以

$$
V_j=\lambda_j^{-1}V.
\tag{2.3}
$$

于是

$$
f_j=\frac{\cos^2\alpha_j\,H_j-\beta\sin^2\alpha_j\,V_j}
          {\cos^2\alpha_j+\beta\sin^2\alpha_j}
=\lambda_j^{-1}f,
\qquad
\partial_tF_j=f_j.
\tag{2.4}
$$

由 \(\cos\alpha_j\geq\delta\) 还得到 uniform pointwise estimate

$$
|f_j|^2\leq C(\beta,\delta)
\bigl(|H_j|^2+|V_j|^2\bigr).
\tag{2.5}
$$

现在保留 fixed singular point \((X_0,T)\)，定义

$$
q_j=\lambda_j(p_j-X_0),
\qquad
\theta_j=\lambda_j^2(T-t_j).
\tag{2.6}
$$

同一原始点在 fixed-center coordinates 中的位置为

$$
G_j(x,t):=\lambda_j\bigl(F(x,\tau_j(t))-X_0\bigr)
=F_j(x,t)+q_j,
\tag{2.7}
$$

并且

$$
T-\tau_j(t)=\lambda_j^{-2}(\theta_j-t).
\tag{2.8}
$$

二维 backward heat kernel 因而满足

$$
\rho_{X_0,T}(F,\tau_j(t))\,d\mu_{\tau_j(t)}
=\psi_j(F_j,t)\,d\mu_t^j,
\tag{2.9}
$$

其中

$$
\psi_j(z,t)=\frac{1}{4\pi(\theta_j-t)}
\exp\!\left(-\frac{|z+q_j|^2}{4(\theta_j-t)}\right).
\tag{2.10}
$$

最容易遗漏的是 normal-position identity：

$$
G_j^\perp=(F_j+q_j)^\perp
=F_j^\perp+q_j^\perp.
\tag{2.11}
$$

所以 fixed-center monotonicity 控制的是 \((F_j+q_j)^\perp\)，而不是自动控制 \(F_j^\perp\)。

## 3. Gaussian lower bound 的 sharp criterion

固定 \(R>0\) 与 \(s_1<s_2<0\)。在 cylinder

$$
|F_j|\leq R,
\qquad
s_1\leq t\leq s_2
$$

上，存在与 \(j\) 无关的常数 \(c_R>0\) 使 \(\psi_j\geq c_R\)，当且仅当

$$
\sup_j|q_j|<\infty,
\qquad
\sup_j\theta_j<\infty.
\tag{3.1}
$$

确实，若 \(|q_j|\leq Q\)、\(0\leq\theta_j\leq\Theta\)，则

$$
-s_2\leq\theta_j-t\leq\Theta-s_1,
\qquad
|F_j+q_j|\leq R+Q,
$$

从而

$$
\psi_j(F_j,t)\geq
\frac{1}{4\pi(\Theta-s_1)}
\exp\!\left(-\frac{(R+Q)^2}{4(-s_2)}\right)>0.
\tag{3.2}
$$

反之，若 \(\theta_j\to\infty\)，则在 \(z=0,t=s_2\) 处 prefactor 趋于零；若 \(|q_j|\to\infty\) 而 \(\theta_j\) 有界，则 exponential factor 在整个固定 ball 上趋于零。因此 (3.1) 也是获得 uniform Gaussian lower bound 的必要条件。

## 4. 为什么无条件的“相同命题”不能成立

### 4.1 shrinking sphere 的严格反例

先看 ordinary mean curvature flow。这不是 beta-symplectic-specific counterexample；它的作用是证明“仅凭第 369 页的 curvature-normalizing parametrization 就可推出四个消失极限”这一普遍几何断言为假。

令 \(M_t=S^n_{r(t)}\subset\mathbb R^{n+1}\) 为 shrinking round sphere，

$$
r(t)=\sqrt{2n(T-t)}.
$$

固定单位向量 \(e\)，在 \(t_j\nearrow T\) 时取基点 \(p_j=r(t_j)e\)，并取

$$
\lambda_j=|H|(p_j,t_j)=\frac{n}{r(t_j)}.
$$

直接代入 (1.1) 得到一个与 \(j\) 无关的 rescaled flow：其 sphere center 为 \(-ne\)，radius 为

$$
r_j(t)=\sqrt{n^2-2nt},
$$

故

$$
|H_j|(t)=\frac{n}{\sqrt{n^2-2nt}},
\qquad
|H_j|(x_j,0)=1.
\tag{4.1}
$$

取任意 \(\varepsilon>0\)，令 \(s_1=-\varepsilon\)、\(s_2=-\varepsilon/2\)。只要

$$
R>\sqrt{n^2+2n\varepsilon}-n,
$$

每个 \(t\in[s_1,s_2]\) 的 sphere 与 \(B_R(0)\) 相交于具有正面积的 spherical cap。因此

$$
\int_{s_1}^{s_2}\int_{M_t^j\cap B_R(0)}
|H_j|^2\,d\mu_t^j\,dt
$$

与 \(j\) 无关且严格为正，绝不趋于零。对与 Sun--Jun 问题相同的 surface dimension，取 \(n=2\) 即可。

### 4.2 smooth nonflat limit obstruction

上述现象并非 round symmetry 的偶然结果。设 moving-center rescalings 在基点附近 smooth locally converges 到 \(F_\infty\)，并保留 normalization

$$
|H_\infty|(p_\infty,0)=1.
$$

由连续性，可取 compact coordinate patch \(K\) 和 \(s_1<s_2<0\)，使

$$
|H_\infty|\geq\frac12
\quad\text{on }K\times[s_1,s_2].
$$

smooth convergence 使得大 \(j\) 时 \(|H_j|\geq1/4\)，induced area density 也在该 patch 上具有统一正下界。再取固定 \(R\)，使所有 \(F_j(K,t)\subset B_R(0)\)。于是存在 \(c>0\) 使

$$
\liminf_{j\to\infty}
\int_{s_1}^{s_2}\int_{\Sigma_t^j\cap B_R(0)}
|H_j|^2\,d\mu_t^j\,dt\geq c>0.
\tag{4.2}
$$

因此，若某个 beta-symplectic curvature-normalizing sequence 具有保留基点的 smooth nonflat blow-up limit，则它也不可能满足第一个消失极限。反过来，仅由点值 \(|H_j|(x_j,0)=1\) 而没有 compactness，不能直接推出 (4.2)；这一 regularity 条件不可省略。

## 5. beta-symplectic flow 的严格修正版

下面给出可以从 Han--Li--Sun fixed-center Proposition 5.1 严格推出的结论。

### Theorem 5.1（moving-center transfer）

设 \(F\) 是上述 beta-symplectic gradient flow，\((X_0,T)\) 是 fixed singular point。令 \(\lambda_j\to\infty\)，并按 (1.1)、(2.6) 定义 \(F_j,q_j,\theta_j\)。假设：

1. 对同一列 \(\lambda_j\)，fixed-center rescalings
   \[
   \widetilde F_j(x,u)=\lambda_j\bigl(F(x,T+\lambda_j^{-2}u)-X_0\bigr)
   \]
   满足 Han--Li--Sun Proposition 5.1 的四个 fixed-center 局部 spacetime \(L^2\) 极限；
2. \(\sup_j|q_j|<\infty\) 且 \(0\leq\theta_j\leq\Theta<\infty\)；
3. 所考察的固定区间 \([s_1,s_2]\subset(-\infty,0)\) 包含在大 \(j\) 的 moving rescaled time domain 中。

则对每个 \(R>0\)，

$$
\int_{s_1}^{s_2}\int_{\Sigma_t^j\cap B_R(0)}
|H_j|^2\,d\mu_t^j\,dt\to0,
\tag{5.1}
$$

$$
\int_{s_1}^{s_2}\int_{\Sigma_t^j\cap B_R(0)}
|V_j|^2\,d\mu_t^j\,dt\to0,
\tag{5.2}
$$

$$
\int_{s_1}^{s_2}\int_{\Sigma_t^j\cap B_R(0)}
|f_j|^2\,d\mu_t^j\,dt\to0.
\tag{5.3}
$$

并且，下列两个条件等价：

$$
\int_{s_1}^{s_2}\int_{\Sigma_t^j\cap B_R(0)}
|F_j^\perp|^2\,d\mu_t^j\,dt\to0,
\tag{5.4}
$$

$$
\int_{s_1}^{s_2}\int_{\Sigma_t^j\cap B_R(0)}
|q_j^\perp|^2\,d\mu_t^j\,dt\to0.
\tag{5.5}
$$

这里的 (5.5) 是本文的 normal-displacement condition，与 Han--Li--Sun 原文中有争议的 moving-cutoff 公式 (5.5) 无关。

特别地，若

$$
q_j\to0
\tag{5.6}
$$

且存在 \(A_R<\infty\) 使

$$
\int_{s_1}^{s_2}
\mu_t^j\bigl(\Sigma_t^j\cap B_R(0)\bigr)\,dt
\leq A_R,
\tag{5.7}
$$

则 (5.4) 成立，因而四个 moving-center 极限全部成立。

### Proof

固定 moving time \(t\)，令

$$
u=t-\theta_j.
$$

由 \(\theta_j=\lambda_j^2(T-t_j)\)，

$$
T+\lambda_j^{-2}u
=t_j+\lambda_j^{-2}t.
$$

因此在对应点上

$$
\widetilde F_j(x,u)=F_j(x,t)+q_j.
\tag{5.8}
$$

translation 不改变 \(H_j,V_j,f_j\)、normal spaces 或 induced measure。若 \(|F_j(x,t)|<R\) 且 \(|q_j|\leq Q\)，则

$$
|\widetilde F_j(x,u)|<R+Q.
$$

又因 \(0\leq\theta_j\leq\Theta\)，当 \(t\in[s_1,s_2]\) 时

$$
u\in[s_1-\Theta,s_2]\subset(-\infty,0).
$$

所有 integrands 非负，故

$$
\int_{s_1}^{s_2}\int_{\{|F_j|<R\}}|H_j|^2
\leq
\int_{s_1-\Theta}^{s_2}
\int_{\{|\widetilde F_j|<R+Q\}}|\widetilde H_j|^2.
$$

右端由 fixed-center Proposition 5.1 趋于零，证明 (5.1)。完全相同的 inclusion 与 time shift 证明 (5.2) 及 (5.3)。也可由 (2.5) 从 (5.1)、(5.2) 直接推出 (5.3)。

对 normal-position term，由 (2.11) 得

$$
\widetilde F_j^\perp=F_j^\perp+q_j^\perp.
$$

fixed-center Proposition 5.1 与相同的 ball/time inclusion 先给出

$$
\int_{s_1}^{s_2}\int_{\{|F_j|<R\}}
|F_j^\perp+q_j^\perp|^2\to0.
\tag{5.9}
$$

利用

$$
|F_j^\perp|^2
\leq2|F_j^\perp+q_j^\perp|^2+2|q_j^\perp|^2
$$

可得 (5.5) \(\Rightarrow\) (5.4)。反向使用

$$
|q_j^\perp|^2
\leq2|F_j^\perp+q_j^\perp|^2+2|F_j^\perp|^2
$$

并结合 (5.9)，得到 (5.4) \(\Rightarrow\) (5.5)。最后，orthogonal projection 不增大长度，所以

$$
\int|q_j^\perp|^2
\leq |q_j|^2
\int d\mu_t^jdt.
$$

(5.6) 与 (5.7) 使右端趋于零，从而得到第四个极限。证毕。

## 6. 第四项为什么确实需要额外条件

仅有 \(q_j\) 与 \(\theta_j\) 有界不足以从 shifted normal-position limit 得到 \(F_j^\perp\) limit。考虑静态 affine plane

$$
F_j(u,v,t)=(u,v,-1)\subset\mathbb R^3,
\qquad
q_j=(0,0,1).
$$

令 \(H_j=V_j=f_j=0\)。则

$$
F_j+q_j=(u,v,0)
$$

完全 tangent，故 \((F_j+q_j)^\perp=0\)；但

$$
F_j^\perp=(0,0,-1).
$$

对任意 \(R>1\) 与 \(s_1<s_2\)，

$$
\int_{s_1}^{s_2}\int_{F_j\cap B_R(0)}|F_j^\perp|^2
\,d\mu\,dt
=(s_2-s_1)\pi(R^2-1)>0.
$$

这说明 center displacement 的 normal component 是真实的几何误差项，不能被一句“平移不影响曲率”消去。

## 7. fixed cutoff 与非循环性

上述 transfer proof 只使用 fixed-center Proposition 5.1、ball inclusion 和 time translation。若从 weighted monotonicity 直接证明修正版，则在原坐标中选择一个固定 cutoff \(\phi\)，并使用

$$
\phi(F)=\phi\!\left(X_0+\lambda_j^{-1}(F_j+q_j)\right).
$$

在 \(|F_j|\leq R\)、\(|q_j|\leq Q\) 上，\(\lambda_j^{-1}(F_j+q_j)\to0\) uniformly，因此大 \(j\) 时固定 cutoff 恒等于一。再由 (3.2) 去除 Gaussian weight，即得到 \(H_j,V_j\) 的 unweighted estimates；(2.5) 给出 \(f_j\)，monotonicity square 与 (2.11) 给出 shifted normal-position estimate。全过程不需要 moving cutoff，也不把任何一个待证消失极限作为先验条件。

## 8. 结论与逻辑范围

1. 书第 369 页的 curvature-normalizing moving-center scaling 与 Han--Li--Sun 的 fixed-center tangent-flow scaling 不可直接互换。
2. “仅凭该参数化就得到 Proposition 5.1 的四个相同极限”是错误的；shrinking sphere 已在 ordinary MCF 中给出严格反例。
3. 对 beta-symplectic flow，现有事实并未构造一个无条件反例。因此正确结论不是宣称 beta-symplectic 命题已被普遍否定，而是：没有 \(q_j,\theta_j\) 等 center-control hypotheses 时，fixed-center proof 不能推出 moving-center version；若还存在 smooth nonflat normalized limit，则第一个极限必然失败。
4. 在 \(q_j,\theta_j\) 有界时，前三个极限由 fixed-center Proposition 5.1 严格转移。第四个极限恰好还需要 \(q_j^\perp\) 的局部 \(L^2\) 消失；\(q_j\to0\) 与 local area bound 是一个清晰的充分条件。
5. 这一区分解释了两种 blow-up 的用途：fixed-center scaling 用于识别 tangent behavior；curvature-normalizing moving-center scaling 则刻意保留基点曲率，通常用于寻找 nonflat singularity model。

## 参考文献

1. B. Andrews, B. Chow, C. Guenther, and M. Langford, *Extrinsic Geometric Flows*, Graduate Studies in Mathematics 206, American Mathematical Society, 2020, especially printed pp. 369 and 372--374. DOI: 10.1090/gsm/206.
2. X. Han, J. Li, and J. Sun, *Gradient flow for beta-symplectic critical surfaces*, Ann. Inst. H. Poincaré Anal. Non Linéaire 41 (2024), 1083--1116, especially Proposition 5.1. DOI: 10.4171/AIHPC/100.
