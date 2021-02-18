# SSRP - Simple Signal Replication Protocol

## Abstract

The Simple Signal Replication Protocol is an application-level protocol with
the lightness and speed necessary for distributed and collaborative information
systems. It is a generic and stateless protocol which can be used for many
tasks, such as lossless data replication or querying for a data's subset.  SSRP
is built with HTTP to make implementation accessible.

## Introduction

### Purpose

The Simple Signal Replication Protocol is an application-level protocol with
the lightness and speed necessary for distributed and collaborative information
systems. It allows the lossless transport of a digital signal from a sender to
a receiver.

## Definition

### Theoretical Model of a Signal

A digital signal is used to represent data as a sequence of discrete values.
In theoretical terms, a signal is modeled within a vector space $R^d$, where
$d$ represents the function's domain. Commonly-used domains include $d=1$ to
model time series signals, or $d=2$ to model signals dependent on location [1].
Within the scope of this work, we assume that the domain of a digital signal is
descrete, hence representing a finite number of isolated points.


## References

- 1: https://de.wikipedia.org/w/index.php?title=Signal&oldid=207389957
