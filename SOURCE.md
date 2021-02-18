# SSRP - Simple Signal Replication Protocol

## Abstract

The Simple Signal Replication Protocol is an application-level protocol with
the lightness and speed necessary for distributed and collaborative information
systems. It is a generic, stateless and asynchronous protocol which can be used
for many tasks, such as lossless signal replication or querying for subsets of
signals. It's asynchronous and stateless properties allows SSRP peers to update
their replicas independently and concurrently without coordination between
replicas. SSRP is built on top of HTTP to make implementation accessible.

## Introduction

### Purpose

The Simple Signal Replication Protocol is an application-level protocol with
the lightness and speed necessary for distributed and collaborative information
systems. It allows the lossless transport of a digital signal from a sender to
a receiver.

## Definition

### Theoretical Model of a Signal

A digital signal is used to represent data as a sequence of discrete values.
In theoretical terms, a signal is modeled within a vector space $\reals^d$,
where $d$ represents the function's domain. Commonly-used domains include $d=1$
to model time series signals, or $d=2$ to model signals dependent on location
[1].  Within the scope of this work, we assume that the domain of a digital
signal is descrete, hence representing a finite number of isolated points.

## Sampling

Sampling is the process of reducing a continous-time source signal into a
discrete-time destination signal by repeatedly polling the source signal's set
of destinations given an valid input in the source signal's domain [4].

## Aliasing

Aliasing is an effect appearing in signal sampling. It can lead to a
destination signal becoming indistinguishable from the source signal [3].

## Nyquist–Shannon Sampling Theorem

Shannon's theorem states that if a function $f(x)$ contains no frequencies
higher than $B$ hertz than it can be determined by polling a series of points
spaced $1 / 2B$ seconds apart. It can, hence, be assumed that taking more than
$2B$ samples of a function $f(x)$ with a frequency no higher than $B$ hertz
yields a perfect reconstruction $f_s$ through sampling [2].




## References

- 1: https://de.wikipedia.org/w/index.php?title=Signal&oldid=207389957
- 2: https://en.wikipedia.org/w/index.php?title=Nyquist%E2%80%93Shannon_sampling_theorem&oldid=1002056076
- 3: https://en.wikipedia.org/w/index.php?title=Aliasing&oldid=996719536
- 4: https://en.wikipedia.org/w/index.php?title=Sampling_(signal_processing)&oldid=1000373153
