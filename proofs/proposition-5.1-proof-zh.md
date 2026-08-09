# Proposition 5.1 的严谨证明

## 1. 命题与记号

设 $M$ 为紧 Kähler 曲面，$\Sigma_0$ 为紧 symplectic 初始曲面，
$F(\cdot,\tau)$ 是 Han-Li-Sun 所研究的 $L_\beta$ gradient flow，
$T>0$ 是第一奇异时刻，$(X_0,T)$ 是一个 blow-up point。流的速度写成

$$
f=\frac{\cos^2\alpha\,H-\beta\sin^2\alpha\,V}
        {\cos^2\alpha+\beta\sin^2\alpha},
$$

其中 $H$ 是 mean curvature vector，$V$ 是原论文定义的 normal vector，
$\alpha$ 是 Kähler angle，$\beta\ge 0$ 固定。

在以 $X_0$ 为中心的 normal coordinates 中，对 $\lambda\to\infty$ 和
$t<0$ 定义 parabolic rescaling

$$
F_\lambda(x,t)
=\lambda\bigl(F(x,T+\lambda^{-2}t)-X_0\bigr),
\qquad \Sigma_t^\lambda=F_\lambda(\Sigma,t).
$$

相应的缩放量满足

$$
H_\lambda=\lambda^{-1}H,
\qquad V_\lambda=\lambda^{-1}V,
\qquad f_\lambda=\lambda^{-1}f,
\qquad d\mu_t^\lambda=\lambda^2d\mu_\tau,
$$

其中 $\tau=T+\lambda^{-2}t$。

要证明的是：对任意 $R>0$ 和任意固定的
$-\infty<s_1<s_2<0$，当 $\lambda\to\infty$ 时，

$$
\int_{s_1}^{s_2}\int_{\Sigma_t^\lambda\cap B_R(0)}
|H_\lambda|^2\,d\mu_t^\lambda\,dt\longrightarrow 0, \tag{5.1}
$$

$$
\int_{s_1}^{s_2}\int_{\Sigma_t^\lambda\cap B_R(0)}
|V_\lambda|^2\,d\mu_t^\lambda\,dt\longrightarrow 0, \tag{5.2}
$$

$$
\int_{s_1}^{s_2}\int_{\Sigma_t^\lambda\cap B_R(0)}
|f_\lambda|^2\,d\mu_t^\lambda\,dt\longrightarrow 0, \tag{5.3}
$$

以及

$$
\int_{s_1}^{s_2}\int_{\Sigma_t^\lambda\cap B_R(0)}
|F_\lambda^\perp|^2\,d\mu_t^\lambda\,dt\longrightarrow 0. \tag{5.4}
$$

下面的证明只使用 Proposition 5.1 之前的结果，并且不使用原论文中
存在 moving-cutoff 问题的 displayed equation (5.5)。

## 2. 固定原坐标 cutoff 与 weighted monotonicity

取 $r>0$，使 $B_{2r}(X_0)$ 位于 normal-coordinate chart 内。固定

$$
\phi\in C_c^\infty(B_{2r}(X_0)),
\qquad 0\le\phi\le 1,
\qquad \phi\equiv 1\quad\text{on }B_r(X_0).
$$

这里 $\phi$ 固定在原坐标中，完全不依赖 $\lambda$。令

$$
\rho_{X_0,T}(F,\tau)
=\frac{1}{4\pi(T-\tau)}
\exp\!\left(-\frac{|F-X_0|^2}{4(T-\tau)}\right),
$$

并对原论文 Theorem 3.3 允许的固定 $p\ge p_0$ 定义

$$
\Psi(\tau)=\int_{\Sigma_\tau}
(\cos\alpha)^{-p}\phi(F)\rho_{X_0,T}(F,\tau)\,d\mu_\tau,
$$

$$
Q(\tau)=e^{c_1\sqrt{T-\tau}}\Psi(\tau).
$$

Theorem 3.3 给出

$$
Q'(\tau)
\le -e^{c_1\sqrt{T-\tau}}D(\tau)
+c_2e^{c_1\sqrt{T-\tau}}, \tag{2.1}
$$

其中 $D(\tau)\ge0$，而且它包含以下四项：

$$
\begin{aligned}
D(\tau)=\int_{\Sigma_\tau}
&(\cos\alpha)^{-p}\phi(F)\rho_{X_0,T}(F,\tau)\\
&\quad\cdot\left[
\frac14\left|\frac{(F-X_0)^\perp}{T-\tau}+f+H\right|^2
+|H+a(\alpha)V|^2
+\frac78|H|^2+\frac78|V|^2
\right]d\mu_\tau . \tag{2.2}
\end{aligned}
$$

这里 $a(\alpha)$ 是 Theorem 3.3 中的显式有界系数。后面的证明只需要
(2.2) 中各项非负以及 $|H|^2,|V|^2$ 的正系数。

### 2.1 终端极限确实存在

固定 $\tau_*<T$，令

$$
\widetilde Q(\tau)
=Q(\tau)-c_2\int_{\tau_*}^{\tau}
e^{c_1\sqrt{T-u}}\,du.
$$

由 (2.1)，

$$
\widetilde Q'(\tau)
\le-e^{c_1\sqrt{T-\tau}}D(\tau)\le0.
$$

另一方面 $Q(\tau)\ge0$，而上式中被减去的积分在 $[\tau_*,T)$ 上有界，
所以 $\widetilde Q$ 有统一下界。因此 $\widetilde Q(\tau)$ 在
$\tau\uparrow T$ 时有有限极限。被减去的积分也有有限极限，故

$$
L:=\lim_{\tau\uparrow T}Q(\tau)
$$

存在且有限。这个论证明确处理了 (2.1) 中的 one-sided inequality 和正误差项。

## 3. 缩短时间区间上的 dissipation 趋于零

令

$$
\tau_i(\lambda)=T+\lambda^{-2}s_i,
\qquad i=1,2.
$$

当 $\lambda$ 足够大时，
$0<\tau_1(\lambda)<\tau_2(\lambda)<T$，并且两者都趋于 $T$。
把 (2.1) 从 $\tau_1(\lambda)$ 积分到 $\tau_2(\lambda)$，得到

$$
\begin{aligned}
\int_{\tau_1(\lambda)}^{\tau_2(\lambda)}
e^{c_1\sqrt{T-\tau}}D(\tau)\,d\tau
\le{}&Q(\tau_1(\lambda))-Q(\tau_2(\lambda))\\
&+c_2\int_{\tau_1(\lambda)}^{\tau_2(\lambda)}
e^{c_1\sqrt{T-\tau}}\,d\tau . \tag{3.1}
\end{aligned}
$$

第一项趋于 $L-L=0$。第二项的积分区间长度为

$$
\tau_2(\lambda)-\tau_1(\lambda)
=\lambda^{-2}(s_2-s_1),
$$

而指数因子在该区间上一致有界，所以第二项是 $O(\lambda^{-2})$。
此外指数因子在 $\tau$ 接近 $T$ 时有统一正下界。因此

$$
\int_{\tau_1(\lambda)}^{\tau_2(\lambda)}D(\tau)\,d\tau
\longrightarrow0. \tag{3.2}
$$

## 4. 完整的 parabolic scaling

作变量代换

$$
\tau=T+\lambda^{-2}t,
\qquad d\tau=\lambda^{-2}dt,
\qquad T-\tau=\lambda^{-2}(-t).
$$

由 $F-X_0=\lambda^{-1}F_\lambda$，有精确恒等式

$$
\rho_{X_0,T}(F,T+\lambda^{-2}t)
=\lambda^2\rho_0(F_\lambda,t),
$$

其中

$$
\rho_0(z,t)
=\frac{1}{4\pi(-t)}
\exp\!\left(-\frac{|z|^2}{4(-t)}\right). \tag{4.1}
$$

同时

$$
\frac{(F-X_0)^\perp}{T-\tau}+f+H
=\lambda\left(
\frac{F_\lambda^\perp}{-t}+f_\lambda+H_\lambda
\right). \tag{4.2}
$$

在 (3.2) 中使用
$d\mu_\tau=\lambda^{-2}d\mu_t^\lambda$、
$d\tau=\lambda^{-2}dt$、(4.1)、(4.2) 以及
$H=\lambda H_\lambda$、$V=\lambda V_\lambda$，所有 $\lambda$ 次幂恰好抵消。
于是

$$
\begin{aligned}
\int_{s_1}^{s_2}\int_{\Sigma_t^\lambda}
&(\cos\alpha_\lambda)^{-p}
\phi(X_0+\lambda^{-1}F_\lambda)
\rho_0(F_\lambda,t)\\
&\cdot\left[
\frac14\left|\frac{F_\lambda^\perp}{-t}
+f_\lambda+H_\lambda\right|^2
+|H_\lambda+a(\alpha_\lambda)V_\lambda|^2
+\frac78|H_\lambda|^2+\frac78|V_\lambda|^2
\right]d\mu_t^\lambda\,dt
\longrightarrow0. \tag{4.3}
\end{aligned}
$$

这是整个证明的核心 estimate。

## 5. 在固定 scaled ball 上去掉权重

固定 $R>0$。当 $\lambda>R/r$ 时，如果
$F_\lambda\in B_R(0)$，则

$$
X_0+\lambda^{-1}F_\lambda\in B_{R/\lambda}(X_0)
\subset B_r(X_0),
$$

所以

$$
\phi(X_0+\lambda^{-1}F_\lambda)=1. \tag{5.1a}
$$

对 $t\in[s_1,s_2]$ 和 $z\in B_R(0)$，有
$0<-s_2\le -t\le -s_1$。因此由 (4.1)，

$$
\rho_0(z,t)
\ge c_R
:=\frac{1}{4\pi(-s_1)}
\exp\!\left(-\frac{R^2}{4(-s_2)}\right)>0. \tag{5.1b}
$$

由于流保持 symplectic，原论文 Proposition 5.1 之前的估计给出
$\cos\alpha\ge\delta>0$；特别地
$(\cos\alpha_\lambda)^{-p}\ge1$。

从 (4.3) 中保留 $|H_\lambda|^2$ 项，并用 (5.1a)、(5.1b)，得到

$$
\frac78c_R
\int_{s_1}^{s_2}\int_{\Sigma_t^\lambda\cap B_R(0)}
|H_\lambda|^2\,d\mu_t^\lambda\,dt
\le \text{(4.3) 的左端}.
$$

右端趋于零，所以 (5.1) 成立。完全相同地保留
$|V_\lambda|^2$ 项，即得 (5.2)。

## 6. 推出速度量 $f_\lambda$ 的极限

缩放后的速度公式是

$$
f_\lambda
=\frac{\cos^2\alpha_\lambda\,H_\lambda
-\beta\sin^2\alpha_\lambda\,V_\lambda}
{\cos^2\alpha_\lambda+\beta\sin^2\alpha_\lambda}.
$$

分母至少为 $\cos^2\alpha_\lambda\ge\delta^2$，而分子中的系数由固定的
$\beta$ 和 $0\le\sin^2\alpha_\lambda,\cos^2\alpha_\lambda\le1$ 一致控制。
所以存在只依赖于 $\beta,\delta$ 的常数 $C_f$，使

$$
|f_\lambda|^2
\le C_f\bigl(|H_\lambda|^2+|V_\lambda|^2\bigr). \tag{6.1}
$$

在 $[s_1,s_2]\times(\Sigma_t^\lambda\cap B_R(0))$ 上积分，并使用
(5.1)、(5.2)，立即得到 (5.3)。

## 7. 推出位置向量法向分量的极限

从 (4.3) 的第一个平方项以及 (5.1a)、(5.1b) 得到

$$
\int_{s_1}^{s_2}\int_{\Sigma_t^\lambda\cap B_R(0)}
\left|\frac{F_\lambda^\perp}{-t}
+f_\lambda+H_\lambda\right|^2
d\mu_t^\lambda\,dt\longrightarrow0. \tag{7.1}
$$

又因为 $t\in[s_1,s_2]$ 时 $-t\le -s_1$，

$$
\begin{aligned}
|F_\lambda^\perp|^2
&=(-t)^2\left|
\left(\frac{F_\lambda^\perp}{-t}+f_\lambda+H_\lambda\right)
-f_\lambda-H_\lambda\right|^2\\
&\le3(-s_1)^2\left(
\left|\frac{F_\lambda^\perp}{-t}+f_\lambda+H_\lambda\right|^2
+|f_\lambda|^2+|H_\lambda|^2
\right). \tag{7.2}
\end{aligned}
$$

对 (7.2) 积分，再用 (7.1)、(5.3)、(5.1)，得到 (5.4)。

## 8. 为什么不需要原论文的 equation (5.5)

原论文 (5.5) 使用 $\phi_R(F_\lambda)$，即固定在 scaled coordinates
中的 cutoff。放回原坐标后，它成为
$\phi_R(\lambda(F-X_0))$，随 $\lambda$ 改变，所以不能直接由某一个固定
localized quantity 的终端极限推出。

上面的证明始终使用固定原坐标 cutoff $\phi(F)$。它在 scaled coordinates
中变成

$$
\phi(X_0+\lambda^{-1}F_\lambda),
$$

其等于 $1$ 的区域随 $\lambda$ 扩大。对每个预先固定的 $B_R(0)$，这个
区域最终覆盖整个 $B_R(0)$，恰好足以从 weighted dissipation 得到四个
局部 $L^2$ 极限。因此，(5.5) 的 moving-cutoff assertion 不是 Proposition
5.1 的必要步骤。

## 9. 非循环性与结论

本证明只使用以下 Proposition 5.1 之前的输入：

1. symplectic preservation 给出的 $\cos\alpha\ge\delta>0$；
2. Theorem 3.3 的 weighted monotonicity inequality；
3. Proposition 5.1 前列出的 parabolic scaling identities；
4. elementary inequalities 与 Gaussian 在固定 cylinder 上的显式正下界。

没有使用 Lemma 5.2、Lemma 5.3、tangent-cone compactness、Allard theorem
在后文中的应用或任何依赖 Proposition 5.1 的结果。因此论证是非循环的。

综上，Proposition 5.1 的四个结论 (5.1)-(5.4) 全部成立。原论文证明中
(5.5) 的 cutoff 推导可以删除，并由上述固定原坐标 cutoff 论证取代。

## 参考文献

X. Han, J. Li, and J. Sun, *Gradient flow for beta-symplectic critical
surfaces*, Ann. Inst. H. Poincaré Anal. Non Linéaire 41 (2024), 1083-1116,
DOI: 10.4171/AIHPC/100.
