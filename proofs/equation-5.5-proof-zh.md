## 一、精确问题陈述

目标是严格说明 printed page 1104 中 equation (5.5) 是否能由此前的 estimates 推出。原问题要求：

> 证明或否定 claimed limit (5.5)，并且把 change of variables、cutoff choice、normalization constant、one-sided-limit argument、limiting estimate 全部写清楚。若原推导不成立，需要指出 exact gap，并给出 corrected claim。

设 backward heat kernel 为
$$
\rho_{X_0,T}(F,t)
=
[4\pi(T-t)]^{-1}
\exp\!\left(-\frac{|F-X_0|^2}{4(T-t)}\right).
$$

Section 3 的 localized quantity 是
$$
\Psi_\chi(t)
=
\int_{\Sigma_t}
(\cos\alpha)^{-p}\chi(F)\rho_{X_0,T}(F,t)\,d\mu_t,
$$
其中 $\chi\in C_0^\infty(B_{2r}(X_0))$，且 $\chi=1$ on $B_r(X_0)$。令
$$
Q_\chi(t)=e^{c_1\sqrt{T-t}}\Psi_\chi(t).
$$

Theorem 3.3 给出 one-sided differential inequality
$$
Q_\chi'(t)
\le
-N_\chi(t)+c_2e^{c_1\sqrt{T-t}},
$$
其中 $N_\chi(t)\ge 0$ 是 nonnegative square terms 的 integral。

Section 5 的 parabolic rescaling 是
$$
F_\lambda(x,s)=\lambda(F(x,T+\lambda^{-2}s)-X_0),
\qquad
d\mu_s^\lambda=\lambda^2d\mu_{T+\lambda^{-2}s},
$$
并且
$$
w_\lambda=(\cos\alpha_\lambda)^{-p}.
$$

问题中的 printed expression 使用固定 scaled cutoff $\phi_R(F_\lambda)$，并声称对 fixed $-1<s_1<s_2<0$，
$$
G_\lambda(s_2)-G_\lambda(s_1)\to 0.
$$

## 二、主要数学进展

**Proven：fixed-cutoff terminal limit 存在。**

固定一个 original-coordinate cutoff $\chi$。由 $N_\chi(t)\ge 0$，
$$
Q_\chi'(t)\le c_2e^{c_1\sqrt{T-t}}.
$$
右端在 terminal interval 上 integrable。定义 tail error
$$
A(t)=\int_t^T c_2e^{c_1\sqrt{T-\tau}}\,d\tau.
$$
则 $A(t)\to 0$ as $t\uparrow T$，并且
$$
(Q_\chi+A)'(t)
=
Q_\chi'(t)-c_2e^{c_1\sqrt{T-t}}
\le 0.
$$
所以 $Q_\chi+A$ monotone nonincreasing。又因为 $Q_\chi\ge0$ 且 $A\ge0$，它有 finite one-sided limit。于是
$$
\lim_{t\uparrow T}Q_\chi(t)=L_\chi
$$
存在且有限。

这说明 one-sided inequality 和 positive error term 都不是障碍：positive error 由 tail integral 吸收。

**Proven：corrected fixed-cutoff rescaling identity。**

令
$$
t_\lambda(s)=T+\lambda^{-2}s,\qquad s<0.
$$
则
$$
T-t_\lambda(s)=\lambda^{-2}(-s),
\qquad
F-X_0=\lambda^{-1}F_\lambda.
$$
Gaussian exponent 满足
$$
\frac{|F-X_0|^2}{4(T-t_\lambda(s))}
=
\frac{|F_\lambda|^2}{4(-s)}.
$$
二维 area scaling 给出
$$
[4\pi(T-t_\lambda(s))]^{-1}d\mu_{t_\lambda(s)}
=
[4\pi(-s)]^{-1}d\mu_s^\lambda.
$$
Kähler angle 在 positive homothetic rescaling 下 invariant，因此
$$
(\cos\alpha_\lambda)^{-p}=(\cos\alpha)^{-p}.
$$

所以 fixed original cutoff $\chi(F)$ 在 scaled variables 中变成
$$
\chi(X_0+\lambda^{-1}F_\lambda).
$$
定义 corrected endpoint quantity
$$
G_\lambda^\chi(s)
=
e^{c_1\sqrt{T-t_\lambda(s)}}
\int_{\Sigma_s^\lambda}
(\cos\alpha_\lambda)^{-p}
\chi(X_0+\lambda^{-1}F_\lambda)
(-s)^{-1}
e^{-|F_\lambda|^2/[4(-s)]}
\,d\mu_s^\lambda.
$$
则 exact identity 是
$$
G_\lambda^\chi(s)
=
4\pi Q_\chi(t_\lambda(s)).
$$

若使用 normalized factor $[4\pi(-s)]^{-1}$，则等式变为
$$
G_\lambda^\chi(s)=Q_\chi(t_\lambda(s)).
$$
因此 $4\pi$ 只是 common normalization factor，不影响 zero-difference limit。

**Proven：corrected two-time limit。**

因为 fixed $s_i<0$ 时
$$
t_\lambda(s_i)=T+\lambda^{-2}s_i \uparrow T,
$$
所以
$$
Q_\chi(t_\lambda(s_1))\to L_\chi,
\qquad
Q_\chi(t_\lambda(s_2))\to L_\chi.
$$
于是
$$
G_\lambda^\chi(s_2)-G_\lambda^\chi(s_1)
=
4\pi\bigl(Q_\chi(t_\lambda(s_2))-Q_\chi(t_\lambda(s_1))\bigr)
\to 0.
$$

epsilon proof 也直接成立：给定 $\varepsilon>0$，取 $\delta>0$ 使得
$$
|Q_\chi(t)-L_\chi|<\frac{\varepsilon}{8\pi}
\quad\text{whenever }T-\delta<t<T.
$$
取 $\lambda$ 足够大，使 $T-t_\lambda(s_i)<\delta$ for $i=1,2$。则
$$
|G_\lambda^\chi(s_2)-G_\lambda^\chi(s_1)|
\le
4\pi|Q_\chi(t_\lambda(s_2))-L_\chi|
+
4\pi|Q_\chi(t_\lambda(s_1))-L_\chi|
<\varepsilon.
$$

## 三、主要障碍

真正的 gap 是 cutoff。

fixed original cutoff $\chi(F)$ 在 scaled variables 中对应
$$
\chi(X_0+\lambda^{-1}F_\lambda),
$$
而 printed equation 使用的是 fixed scaled cutoff
$$
\phi_R(F_\lambda).
$$
后者在 original variables 中是
$$
\chi_{R,\lambda}(X)=\phi_R(\lambda(X-X_0)),
$$
其 support 在 $B_{2R/\lambda}(X_0)$，随 $\lambda$ 改变。

因此 printed expression 不是同一个 fixed quantity $Q_\chi$ 的两个 terminal evaluations，而是一族 moving-cutoff quantities。对每个 $\lambda$ 单独有 terminal limit，并不能推出
$$
Q_\lambda(T+\lambda^{-2}s_2)-Q_\lambda(T+\lambda^{-2}s_1)\to0.
$$
还需要 uniform moving-cutoff estimate 或 cutoff-error theorem。此前 estimates 没有提供这一点。

## 四、方法时间线

| stage | question addressed | conclusion established | effect on the approach |
|---|---|---|---|
| 1 | Does the one-sided differential inequality imply a terminal limit? | Yes. Adding the integrable tail error makes the quantity monotone and bounded. | The positive error term is harmless. |
| 2 | What is the exact parabolic scaling identity? | The unnormalized scaled Gaussian integral equals $4\pi$ times the normalized Section 3 quantity. | The $4\pi$ factor is bookkeeping only. |
| 3 | What cutoff is produced by a fixed Section 3 cutoff? | It becomes $\chi(X_0+\lambda^{-1}F_\lambda)$ in scaled variables. | This gives a rigorous corrected version of (5.5). |
| 4 | Does this equal the printed $\phi_R(F_\lambda)$? | No. $\phi_R(F_\lambda)$ is a moving original cutoff $\phi_R(\lambda(F-X_0))$. | The printed derivation has a cutoff gap. |
| 5 | Can the corrected statement still serve local estimates on $B_R(0)$? | Yes. If $\lambda r\ge R$, then $\chi(X_0+\lambda^{-1}Y)=1$ on $B_R(0)$. | Later local nonnegative integrals can still be controlled. |

## 五、当前状态与下一步

问题按 printed form 目前未由前文 rigorously proved。严格可得的是 fixed-cutoff corrected statement：

$$
G_\lambda^\chi(s_2)-G_\lambda^\chi(s_1)\to0.
$$

printed cutoff version 需要补充以下 remaining lemma：

**Remaining lemma.** Let $\phi_R\in C_0^\infty(B_{2R}(0))$ with $\phi_R=1$ on $B_R(0)$, and define
$\chi_{R,\lambda}(X)=\phi_R(\lambda(X-X_0))$.
For fixed $-1<s_1<s_2<0$, prove a uniform moving-cutoff convergence theorem showing that
$$
e^{c_1\sqrt{T-t_\lambda(s_2)}}\Psi_{\chi_{R,\lambda}}(t_\lambda(s_2))
-
e^{c_1\sqrt{T-t_\lambda(s_1)}}\Psi_{\chi_{R,\lambda}}(t_\lambda(s_1))
\to 0
$$
as $\lambda\to\infty$, where $t_\lambda(s)=T+\lambda^{-2}s$.
Equivalently, prove that the moving cutoff family has a uniform convergence-to-terminal-limit estimate strong enough at the parabolic scale $T-t\sim\lambda^{-2}$.

没有这个 lemma，(3.6) 只能推出 corrected fixed-cutoff version，不能推出 printed fixed scaled-cutoff formula。
