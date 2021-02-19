# SSRP - Simple Signal Replication Protocol

## Abstract

The Simple Signal Replication Protocol is an application-level protocol with
the lightness and speed necessary for distributed and collaborative information
systems. It is a generic, stateless and asynchronous protocol which can be used
for many tasks, such as lossless signal replication or querying for subsets of
signals. It's asynchronous and stateless properties allows SSRP peers to update
their replicas independently and concurrently without coordination between
replicas. SSRP is built on top of HTTP to make implementation accessible.

## Definitions

### Theoretical Model of a Digital Signal

A digital signal is used to represent data as a sequence of discrete values.
In theoretical terms, a signal is modeled within a vector space $\reals^d$,
where $d$ represents a function's domain. Commonly-used domains to model
digital signals include $d=1$ to model time series data, or $d=2$ to model
signals dependent on location [1]. Within the scope of this work, we assume
that a digital signal's domain is descrete, hence representing a finite number
of isolated points.

## Sampling

Sampling is the process of reducing a continous-time _source_ signal into a
discrete-time _replication_ signal by repeatedly applying inputs to the source.

## Aliasing

Aliasing is an effect appearing in signal sampling. It can lead to a
replication signal becoming indistinguishable from its source [3].

## Nyquist–Shannon Sampling Theorem

Shannon's theorem states that if a function $f(x)$ contains no frequencies
higher than $B$ hertz then it can be determined by polling a series of points
spaced $1 / 2B$ seconds apart. It can, hence, be assumed that taking more than
$2B$ samples of a function $f(x)$ with a frequency no higher than $B$ hertz
yields a perfect reconstruction $f_s$ through sampling [2].

## Asynchronous System

Asynchronous systems are able to handle the program flow as well as the
occurrence of independent events without the need for a a global coordination
mechanism like a clock or a centralized consensus. They do not rely strictly on
arrival times of messages or their ordering.

## Stateless System

A system is stateless when it treats a any occurring message independently and
without the need for keeping track about messages in memory.

## Introduction

### Purpose

The Simple Signal Replication Protocol is an application-level protocol with
the lightness and speed necessary for distributed and collaborative information
systems. It allows the replication and discovery of digital signals over the
Internet.

## Example

The following shows an example of a source initializing the signal replication
by replacing (`PUT`) the current entity (`BTC-USD`) with an incomplete `csv`
content. Using `PATCH`, the source then partially modifies the entity through
additional data.


```http
PUT /signals/BTC-USD HTTP/1.1
Host: destination.com
Content-Type: text/csv

timestamp,value,currency
2021-02-19T22:37:26.102Z,55,529.65,USD
2021-02-19T22:39:09.973Z,55,550.11,USD
```

```http
PATCH /signals/BTC-USD HTTP/1.1
Host: destination.com
Content-Type: text/csv

2021-02-19T22:37:26.102Z,55,529.65,USD
2021-02-19T22:39:09.973Z,55,550.11,USD
```

## Unfinished thoughts

- Data needs to be replicable asynchronously. It may come out of order, but
  that's OK because each data point shall be encoded such that the signal's
  intel does not depent on it or that it can be ordered by the receiver later.
- A sampler should be able request samples of data randomly from the source
  through an dialog.
- Samples should allow to include authentication data such as hashes or proofs

## References

- 1: https://de.wikipedia.org/w/index.php?title=Signal&oldid=207389957
- 2: https://en.wikipedia.org/w/index.php?title=Nyquist%E2%80%93Shannon_sampling_theorem&oldid=1002056076
- 3: https://en.wikipedia.org/w/index.php?title=Aliasing&oldid=996719536
- 4: https://en.wikipedia.org/w/index.php?title=Sampling_(signal_processing)&oldid=1000373153
