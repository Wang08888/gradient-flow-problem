**一、精确问题陈述**

目标是严格解释 printed page 1104 的 equation (5.5) 是否能由此前内容推出。给定
$$
\rho_{X_0,t_0}(F,t)=\frac{1}{4\pi(t_0-t)}
\exp\!\left(-\frac{|F-X_0|^2}{4(t_0-t)}\right),
$$
以及固定原坐标 cutoff $\phi\in C_0^\infty(B_{2r}(X_0))$、$\phi\equiv 1$ on $B_r(X_0)$ 时的 localized Gaussian quantity
$$
\Psi(X_0,t_0;t)
=
\int_{\Sigma_t}
(\cos\alpha)^{-p}\phi(F)\rho_{X_0,t_0}(F,t)\,d\mu_t .
$$
Theorem 3.3 给出一侧 differential inequality：
$$
\frac{d}{dt}\left(e^{c_1\sqrt{t_0-t}}\Psi(X_0,t_0;t)\right)
\le
-\text{nonnegative square terms}
+
c_2 e^{c_1\sqrt{t_0-t}} .
$$

在 Section 5 的 parabolic rescaling 中，令
$$
F_\lambda(x,s)=\lambda\bigl(F(x,T+\lambda^{-2}s)-X_0\bigr),\qquad s<0,
$$
$$
d\mu_s^\lambda=\lambda^2 d\mu_{T+\lambda^{-2}s},\qquad
w_\lambda=(\cos\alpha_\lambda)^{-p}.
$$
printed equation (5.5) 声称：对 fixed $-1<s_1<s_2<0$，
$$
G_\lambda(s_2)-G_\lambda(s_1)\to 0
\quad\text{as }\lambda\to\infty,
$$
其中字面显示的 endpoint quantity 是
$$
G_\lambda(s)
=
e^{c_1\sqrt{T-(T+\lambda^{-2}s)}}
\int_{\Sigma_s^\lambda}
w_\lambda\,\phi_R(F_\lambda)\,(-s)^{-1}
\exp\!\left(-\frac{|F_\lambda|^2}{4(-s)}\right)
d\mu_s^\lambda .
$$

原始请求是：严格说明 gradient flow 中 printed page 1104 的 equation (5.5) 如何由前文推出；若不能按原文推出，则指出 exact gap，并给出 corrected claim。后续目标进一步要求：给出 remaining moving-cutoff lemma 的完整证明，或者严格证明该 lemma 为 false / underived，并给出实际成立的 strongest corrected theorem。

**二、主要数学进展**

**Proven：固定原坐标 cutoff 版本严格成立。**

令 $\chi\in C_0^\infty(B_{2r}(X_0))$ 是一个固定 admissible cutoff，$\chi=1$ on $B_r(X_0)$。定义
$$
\Psi_\chi(t)
=
\int_{\Sigma_t}
(\cos\alpha)^{-p}\chi(F)
\frac{1}{4\pi(T-t)}
\exp\!\left(-\frac{|F-X_0|^2}{4(T-t)}\right)
d\mu_t,
$$
以及
$$
Q_\chi(t)=e^{c_1\sqrt{T-t}}\Psi_\chi(t).
$$
由 differential inequality 舍去 nonpositive square terms，得到
$$
Q_\chi'(t)\le c_2 e^{c_1\sqrt{T-t}}.
$$
因为右端在 $[a,T)$ 上 integrable，设
$$
A(t)=\int_t^T c_2 e^{c_1\sqrt{T-u}}\,du .
$$
则 $A(t)\to 0$，且
$$
(Q_\chi+A)'(t)=Q_\chi'(t)-c_2 e^{c_1\sqrt{T-t}}\le 0.
$$
所以 $Q_\chi+A$ monotone decreasing 且 bounded below，由此 $Q_\chi(t)$ 有 finite one-sided limit：
$$
\lim_{t\uparrow T}Q_\chi(t)=L_\chi<\infty.
$$

接着作 exact rescaling。令
$$
t_\lambda(s)=T+\lambda^{-2}s.
$$
则
$$
T-t_\lambda(s)=\lambda^{-2}(-s),\qquad
F-X_0=\lambda^{-1}F_\lambda,\qquad
d\mu_s^\lambda=\lambda^2d\mu_{t_\lambda(s)}.
$$
Kähler angle 在 positive homothety 下 invariant，所以
$$
(\cos\alpha_\lambda)^{-p}=(\cos\alpha)^{-p}.
$$
于是
$$
\begin{aligned}
&\int_{\Sigma_s^\lambda}
(\cos\alpha_\lambda)^{-p}
\chi(X_0+\lambda^{-1}F_\lambda)
(-s)^{-1}
\exp\!\left(-\frac{|F_\lambda|^2}{4(-s)}\right)
d\mu_s^\lambda\\
&=
4\pi\,\Psi_\chi(t_\lambda(s)).
\end{aligned}
$$
乘上 exponential factor 得
$$
J_\lambda^\chi(s)
=
4\pi Q_\chi(t_\lambda(s)).
$$
因此对 fixed $s_1<s_2<0$，
$$
J_\lambda^\chi(s_2)-J_\lambda^\chi(s_1)
=
4\pi\bigl(Q_\chi(t_\lambda(s_2))-Q_\chi(t_\lambda(s_1))\bigr)
\to 0,
$$
因为两个时间都趋向同一个 terminal limit $L_\chi$。

这里 $4\pi$ 只是 normalization：若使用 normalized kernel $[4\pi(-s)]^{-1}$，则没有这个 factor；若使用 unnormalized $(-s)^{-1}$，两端共同乘以 $4\pi$，不影响 zero limit。

**Proven：printed fixed scaled cutoff 与 fixed original cutoff 不是同一对象。**

printed expression 使用 $\phi_R(F_\lambda)$，其中 $\phi_R$ fixed in scaled coordinates。换回 original coordinates：
$$
\phi_R(F_\lambda)=\phi_R(\lambda(F-X_0))=:\chi_{R,\lambda}(F).
$$
也就是说
$$
\chi_{R,\lambda}(X)=\phi_R(\lambda(X-X_0)).
$$
该 cutoff 支撑在 $B_{2R/\lambda}(X_0)$，并在 $B_{R/\lambda}(X_0)$ 上等于 $1$，所以它随 $\lambda$ 改变。

因此 printed endpoint quantity 精确等于
$$
4\pi
$$
乘以一个 Section 3 type quantity，但这个 quantity 的 cutoff 是 $\chi_{R,\lambda}$，不是一个 fixed $\chi$。固定函数 $Q_\chi(t)$ 的 terminal-limit argument 不能直接应用到 moving family $Q_{\chi_{R,\lambda}}(t)$。

**Proven：individual terminal limits for moving families 不足以推出 two-time limit。**

存在抽象反例：
$$
Q_n(t)=n^2(-t),\qquad t\in(-1,0).
$$
每个 $Q_n\ge 0$，locally absolutely continuous，且
$$
Q_n'(t)=-n^2\le 0.
$$
每个 $Q_n$ 都有 terminal limit：
$$
\lim_{t\uparrow 0}Q_n(t)=0.
$$
但对 fixed $s_1<s_2<0$，
$$
Q_n(n^{-2}s_2)-Q_n(n^{-2}s_1)=s_1-s_2\ne 0.
$$
所以“每个 moving cutoff quantity 各自有 terminal limit”并不 imply diagonal parabolic-scale two-time convergence。

**Proven：literal fixed scaled compact cutoff 在 static plane model 中失败。**

在 flat symplectic plane $P=\mathbb R^2\times\{0\}\subset\mathbb C^2$ 上取 stationary immersion $F(x,t)=x$。此时
$$
\cos\alpha=1,\qquad H=0,\qquad V=0,
$$
parabolic rescaling 后仍是同一 plane，且 weight 为 $1$。

取 nontrivial radial compact cutoff $\phi_R$，满足
$$
\phi_R=1\text{ on }B_R,\qquad
\phi_R=0\text{ outside }B_{2R},
$$
并且 radial nonincreasing。定义
$$
I(s)=
\int_P
\phi_R(Y)(-s)^{-1}
\exp\!\left(-\frac{|Y|^2}{4(-s)}\right)dA(Y).
$$
uncut integral 恒等于
$$
\int_P
(-s)^{-1}
\exp\!\left(-\frac{|Y|^2}{4(-s)}\right)dA(Y)
=4\pi.
$$
但 compactly cut integral 不恒定。令 $s_1=-1$，$s_2=-1/4$，换元 $Y=\sqrt a Z$，$a=-s$，得
$$
I(-a)=
\int_P \phi_R(\sqrt a\,Z)e^{-|Z|^2/4}\,dA(Z).
$$
因为 $a_2=1/4<a_1=1$ 且 $\phi_R$ radial nonincreasing，
$$
\phi_R(\sqrt{a_2}Z)\ge \phi_R(\sqrt{a_1}Z),
$$
并在 cutoff annulus 的正面积子集上严格大。因此
$$
I(-1/4)>I(-1).
$$
在 static plane model 中
$$
G_\lambda(s)=e^{c_1\lambda^{-1}\sqrt{-s}}I(s),
$$
所以
$$
\lim_{\lambda\to\infty}
\bigl(G_\lambda(-1/4)-G_\lambda(-1)\bigr)
=
I(-1/4)-I(-1)>0.
$$
这 disproves standalone fixed-scaled-cutoff lemma。

但该 plane 不是 full Section 5 compact first-singular-flow counterexample：它 noncompact，没有 finite first singular time，且 $X_0$ 在 $T$ 时不是 singular point。

**Proven：moving cutoff derivative terms 是 order-one annular flux。**

对 literal cutoff
$$
\chi_{R,\lambda}(X)=\phi_R(\lambda(X-X_0)),
$$
有
$$
D\chi_{R,\lambda}=\lambda D\phi_R,\qquad
D^2\chi_{R,\lambda}=\lambda^2D^2\phi_R.
$$
把它放入 pre-(5.5) monotonicity calculation 后，cutoff-gradient、cutoff-Laplacian、heat-kernel-gradient terms 在 parabolic change of variables $t=T+\lambda^{-2}s$ 下变为 fixed scaled annulus
$$
R<|F_\lambda|<2R
$$
上的 spacetime integrals：
$$
\int_{s_1}^{s_2}\int_{\Sigma_s^\lambda}
w_\lambda\rho_s(F_\lambda)
\left[
D\phi_R(F_\lambda)\cdot v_\lambda
+
\Delta_{\Sigma_s^\lambda}(\phi_R\circ F_\lambda)
+
2\langle\nabla_{\Sigma_s^\lambda}\log\rho_s,
\nabla_{\Sigma_s^\lambda}(\phi_R\circ F_\lambda)\rangle
\right]
d\mu_s^\lambda ds.
$$
这里没有 $\lambda^{-1}$ 或 $\lambda^{-2}$ prefactor。也就是说，moving cutoff error 并不会因 scaling 自动变成 $o(1)$。要证明 literal moving-cutoff endpoint limit，必须额外证明 annular flux vanishing / cancellation，或某种 uniform moving-cutoff convergence-to-terminal-limit。

**Conditional：若 endpoint weighted measures 两时刻趋于同一 nonzero cone/plane，则 literal compact cutoff 反而有 positive defect。**

若在 $s_1,s_2$ 两个 endpoint 上，pushed-forward weighted measures 弱收敛到同一个 nonzero two-dimensional cone measure $\nu_{\mathrm{cone}}$，则对 suitable radial compact cutoff，
$$
\int \phi_R(Y)(-s_2)^{-1}e^{-|Y|^2/[4(-s_2)]}\,d\nu_{\mathrm{cone}}
>
\int \phi_R(Y)(-s_1)^{-1}e^{-|Y|^2/[4(-s_1)]}\,d\nu_{\mathrm{cone}}.
$$
因此 literal compact scaled cutoff endpoint difference 的 limit 是 strictly positive，而不是 zero。这个是 conditional obstruction，不是 full counterexample，因为 same-limit conical convergence 不能在 (5.5) 前 noncircularly 使用。

**三、主要障碍**

核心障碍只有一个：printed $\phi_R(F_\lambda)$ 是 fixed in scaled coordinates，但它在 original coordinates 中是 moving cutoff
$$
\chi_{R,\lambda}(X)=\phi_R(\lambda(X-X_0)).
$$
Theorem 3.3 的 terminal-limit argument 控制的是一个 fixed localized Gaussian quantity。它给出的是
$$
Q_\chi(t)\to L_\chi,
$$
不是 moving family $Q_{\chi_{R,\lambda}}(t)$ 在 parabolic-scale times 上 uniformly 接近各自 terminal limit。

把 moving cutoff 直接代回 monotonicity calculation 也不能解决问题，因为 cutoff derivative terms 在 scaled variables 中变成 order-one annular flux，没有 small parameter，也没有 sign。static plane computation 说明该 flux 不是形式误差：即使 velocity、curvature、flow-energy 都为零，compact cutoff 仍能看到 Gaussian width 随 $s$ 改变而产生的非零 endpoint difference。

因此，标准 fixed-cutoff monotonicity、one-sided limit、local area bound、fixed-time Radon compactness 都不足以推出 literal (5.5)。需要一个新的 noncircular bridge。

**四、方法时间线**

| stage | question addressed | conclusion established | effect on the approach |
|---|---|---|---|
| fixed-cutoff terminal limit | (3.6) 的 one-sided inequality 是否给出 terminal limit | 对 fixed cutoff $\chi$，$Q_\chi(t)$ has finite one-sided limit as $t\uparrow T$ | fixed-cutoff endpoint route is valid |
| exact rescaling | rescaled endpoint quantity 与 Section 3 quantity 如何对应 | unnormalized scaled integral equals $4\pi\Psi_\chi$ for fixed pullback cutoff $\chi(X_0+\lambda^{-1}F_\lambda)$ | $4\pi$ is harmless normalization |
| cutoff comparison | printed $\phi_R(F_\lambda)$ 是否等于 fixed-cutoff pullback | $\phi_R(F_\lambda)$ corresponds to moving cutoff $\chi_{R,\lambda}(X)=\phi_R(\lambda(X-X_0))$ | identifies the real gap |
| formal moving-family test | individual terminal limits 是否 imply diagonal two-time convergence | false, even for monotone nonnegative scalar families | fixed-cutoff argument cannot be applied familywise |
| static plane model | fixed scaled compact cutoff 是否 intrinsically harmless | false in standalone model; endpoint difference can be strictly positive | shows the obstruction is real |
| annular flux audit | pre-(5.5) estimates 是否 hide a uniform moving-cutoff estimate | no; derivative terms become order-one annular flux | literal moving-cutoff lemma remains unproved |
| compactness audit | fixed-time local area compactness 是否 repairs the gap | only gives separate fixed-time weak limits, not same-limit or flux control | insufficient for literal endpoint limit |
| corrected theorem | what unconditional statement is actually proved | fixed-original-cutoff endpoint theorem with $\chi(X_0+\lambda^{-1}F_\lambda)$ | valid replacement for rigorous use |

**五、当前状态与下一步**

当前问题在 literal fixed compact scaled cutoff reading 下尚未解决：没有 verified proof，也没有 full compact first-singular-flow counterexample。已经 proved 的是 stronger diagnosis：原文从 (3.6) 到 printed (5.5) 的 common-limit step 只严格证明 fixed-original-cutoff replacement；literal $\phi_R(F_\lambda)$ 版本需要一个额外 noncircular moving-cutoff theorem。

最强 unconditional corrected statement 是：
$$
\boxed{
\begin{minipage}{0.92\linewidth}
Let \(X_0\) be the blow-up point and \(T\) the first singular time.
Let \(\chi\in C_0^\infty(B_{2r}(X_0))\) be fixed with \(\chi=1\) on \(B_r(X_0)\).
For fixed \(-1<s_1<s_2<0\), define
\[
J_\lambda^\chi(s)
=
e^{c_1\lambda^{-1}\sqrt{-s}}
\int_{\Sigma_s^\lambda}
(\cos\alpha_\lambda)^{-p}
\chi(X_0+\lambda^{-1}F_\lambda)
(-s)^{-1}
e^{-|F_\lambda|^2/[4(-s)]}
\,d\mu_s^\lambda .
\]
Then
\[
J_\lambda^\chi(s_2)-J_\lambda^\chi(s_1)\to 0
\quad\text{as }\lambda\to\infty .
\]
The same statement with normalized kernel \([4\pi(-s)]^{-1}\) is equivalent.
\end{minipage}
}
$$

剩余 literal moving-cutoff lemma 若要成立，必须另证：
$$
\boxed{
\begin{minipage}{0.92\linewidth}
For the moving cutoff
\[
\chi_{R,\lambda}(X)=\phi_R(\lambda(X-X_0)),
\]
let
\[
Q_{R,\lambda}(t)
=
e^{c_1\sqrt{T-t}}
\int_{\Sigma_t}
(\cos\alpha)^{-p}\chi_{R,\lambda}(F)
\rho_{X_0,T}(F,t)\,d\mu_t .
\]
If \(L_{R,\lambda}=\lim_{t\uparrow T}Q_{R,\lambda}(t)\), prove noncircularly that for each \(i=1,2\),
\[
Q_{R,\lambda}(T+\lambda^{-2}s_i)-L_{R,\lambda}\to 0 .
\]
Equivalently, prove annular cutoff-flux cancellation/vanishing on
\[
R<|F_\lambda|<2R
\]
at the parabolic scale \(T-t\sim\lambda^{-2}\).
\end{minipage}
}
$$

在这个 bridge 被 proved 或 full-hypothesis counterexample 被 constructed 之前，不能把 printed literal compact-scaled-cutoff equation (5.5) 当作已严格推出。
