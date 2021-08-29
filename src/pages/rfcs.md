---
title: Home
id: rfc
description: Request for changes.
draft: false
hide_table_of_contents: false
---

# Tremor RFCs - [Active RFC List](https://rfcs.tremor.rs/)

[Tremor RFCs]: #tremor-rfcs

Many changes, including bug fixes and documentation improvements can be
implemented and reviewed via the normal GitHub pull request workflow.

Some changes, though, are "substantial", and we ask that these be put through a
bit of a design process and produce a consensus among the Tremor community and
the sub-teams.

The "RFC" (request for comments) process is intended to provide a consistent
and controlled path for new features to enter the project and associated sub
projects and libraries, so that all stakeholders can be confident about the
direction the project is evolving in.


## Table of Contents
[Table of Contents]: #table-of-contents

  - [Opening](#tremor-rfcs)
  - [Table of Contents]
  - [When you need to follow this process]
  - [Before creating an RFC]
  - [What the process is]
  - [The RFC life-cycle]
  - [Reviewing RFCs]
  - [Implementing an RFC]
  - [RFC Postponement]
  - [Help this is all too informal!]
  - [License]
  - [Origins]


## When You Need to Follow this Process:
[When you need to follow this process]: #when-you-need-to-follow-this-process

You need to follow this process if you intend to make "substantial" changes to
Tremor, Tremor Script, Tremor Query, Tremor pipelines, concurrency model,
or the RFC process itself. What constitutes a "substantial" change is evolving
based on community norms and varies depending on what part of the ecosystem you
are proposing to change, but may include the following:

  - Any semantic or syntactic change to the project that is not a bugfix.
  - Removing features, including those that are feature-gated.
  - Changes to the interface between the components, sub-systems and
    libraries, including tremor-script function library and tremor-query
    aggregate function library.

Some changes do not require an RFC:

  - Rephrasing, reorganizing, refactoring, or otherwise "changing shape does
    not change meaning".
  - Additions that strictly improve objective, numerical quality criteria
    (warning removal, speedup, better platform coverage, more parallelism, trap
    more errors, etc.).
  - Additions only likely to be _noticed by_ other developers-of-Tremor,
    invisible to users-of-Tremor.

If you submit a pull request to implement a new feature without going through
the RFC process, it may be closed with a polite request to submit an RFC first.


### Sub-team-specific Guidelines
[Sub-team specific guidelines]: #sub-team-specific-guidelines

For more details on when an RFC is required for the following areas, please see
the Tremor community's [sub-team] specific guidelines for:

 ### - [Language Changes](lang_changes/)
 ### - [Library Changes](libs_changes/)
 ### - [API Changes](api_changes/)
 ### - [Architecture Changes](arch_changes/)


## Before Creating an RFC:
[Before creating an RFC]: #before-creating-an-rfc

A hastily-proposed RFC can hurt its chances of acceptance. Low quality
proposals, proposals for previously-rejected features, or those that don't fit
into the near-term roadmap, may be quickly rejected, which can be demotivating
for the unprepared contributor. Laying some groundwork ahead of the RFC can
make the process smoother.

Although there is no single way to prepare for submitting an RFC, it is
generally a good idea to pursue feedback from other project developers
beforehand, to ascertain that the RFC may be desirable; having a consistent
impact on the project requires concerted effort toward consensus-building.

The most common preparations for writing and submitting an RFC include talking
the idea over on our [Tremor chat](https://join.slack.com/t/tremor-debs/shared_invite/enQtOTMxNzY3NDg0MjI2LTQ4MTU4NjlkZDk0MmJmNmIwYjU0ZDc1OTNjMGRmNzUwZTdlZGVkMWFmNGFkZTAwOWJlYjlkMDZkNGNiMjQ2NzI), and occasionally posting "pre-RFCs" on the
chat environment. You may file issues on this repo for discussion, but these are
not actively looked at by the teams.

As a rule of thumb, receiving encouraging feedback from long-standing project
developers, and particularly members of the relevant [sub-team] is a good
indication that the RFC is worth pursuing.


## What the Process Is
[What the process is]: #what-the-process-is

In short, to get a major feature added to Tremor, one must first get the RFC
merged into the RFC repository as a markdown file. At that point the RFC is
"active" and may be implemented with the goal of eventual inclusion into Tremor.

  - Fork the RFC repo [RFC repository].
  - Copy `0000-template.md` to `text/0000-my-feature.md` (where "my-feature" is
    descriptive. Don't assign an RFC number yet.).
  - Fill in the RFC. Put care into the details: RFCs that do not present
    convincing motivation, demonstrate lack of understanding of the design's
    impact, or are disingenuous about the drawbacks or alternatives tend to
    be poorly-received.
  - Submit a pull request. As a pull request, the RFC will receive design
    feedback from the larger community, and the author should be prepared to
    revise it in response.
  - Each pull request will be labeled with the most relevant [sub-team], which
    will lead to its being triaged by that team in a future meeting and assigned
    to a member of the subteam.
  - Build consensus and integrate feedback. RFCs that have broad support are
    much more likely to make progress than those that don't receive any
    comments. Feel free to reach out to the RFC assignee in particular to get
    help identifying stakeholders and obstacles.
  - The sub-team will discuss the RFC pull request, as much as possible in the
    comment thread of the pull request itself. Offline discussion will be
    summarized on the pull request comment thread.
  - RFCs rarely go through this process unchanged, especially as alternatives
    and drawbacks are shown. You can make edits, big and small, to the RFC to
    clarify or change the design, but make changes as new commits to the pull
    request, and leave a comment on the pull request explaining your changes.
    Specifically, do not squash or rebase commits after they are visible on the
    pull request.
  - At some point, a member of the subteam will propose a "motion for final
    comment period" (FCP), along with a *disposition* for the RFC (merge, close,
    or postpone).
  - This step is taken when enough of the tradeoffs have been discussed that
    the subteam is in a position to make a decision. That does not require
    consensus amongst all participants in the RFC thread (which is usually
    impossible). However, the argument supporting the disposition on the RFC
    needs to have already been clearly articulated, and there should not be a
    strong consensus *against* that position outside of the subteam. Subteam
    members use their best judgment in taking this step, and the FCP itself
    ensures there is ample time and notification for stakeholders to push back
    if it is made prematurely.
    - For RFCs with lengthy discussion, the motion to FCP is usually preceded by
      a *summary comment* trying to lay out the current state of the discussion
      and major tradeoffs/points of disagreement.
    - Before actually entering FCP, *all* members of the subteam must sign off;
    this is often the point at which many subteam members first review the RFC
    in full depth.
  - The FCP lasts ten calendar days, so that it is open for at least 5 business
    days.
  - In most cases, the FCP period is quiet, and the RFC is either merged or
    closed. However, sometimes substantial new arguments or ideas are raised,
    the FCP is cancelled, and the RFC goes back into development mode.

## The RFC Life-cycle
[The RFC life-cycle]: #the-rfc-life-cycle

Once an RFC becomes "active", then authors may implement it and submit the
feature as a pull request to the Tremor repo. Being "active" is not a rubber
stamp, and in particular still does not mean the feature will ultimately be
merged; it does mean that in principle all the major stakeholders have agreed
to the feature and are amenable to merging it.

Furthermore, the fact that a given RFC has been accepted and is "active"
implies nothing about what priority is assigned to its implementation, nor does
it imply anything about whether a Tremor contributor has been assigned the task of implementing the task. While it is not *necessary* that the author of the
RFC also pursue the implementation, it is by far the most effective way to see
an RFC through to completion: authors should not expect that other project
stakeholders will take on responsibility for implementing their accepted feature.

Modifications to "active" RFCs can be done in follow-up pull requests. We
strive to write each RFC in a manner that it will reflect the final design of
the feature; but the nature of the process means that we cannot expect every
merged RFC to actually reflect what the end result will be at the time of the
next major release.

In general, once accepted, RFCs should not be substantially changed. Only very
minor changes should be submitted as amendments. More substantial changes
should be new RFCs, with a note added to the original RFC. Exactly what counts
as a "very minor change" is up to the sub-team to decide; check
[Sub-team specific guidelines] for more details.


## Reviewing RFCs
[Reviewing RFCs]: #reviewing-rfcs

While the RFC pull request is up, the sub-team may schedule meetings with the
author and/or relevant stakeholders to discuss the issues in greater detail,
and in some cases the topic may be discussed at a sub-team meeting. In either
case, a summary from the meeting will be posted back to the RFC pull request.

A sub-team makes final decisions about RFCs after the benefits and drawbacks
are well understood. These decisions can be made at any time, but the sub-team
will regularly issue decisions. When a decision is made, the RFC pull request
will either be merged or closed. In either case, if the reasoning is not clear
from the discussion in thread, the sub-team will add a comment describing the
rationale for the decision.


## Implementing an RFC
[Implementing an RFC]: #implementing-an-rfc

Some accepted RFCs represent vital features that need to be implemented right
away. Other accepted RFCs can represent features that can wait until some
arbitrary developer feels like doing the work. Every accepted RFC has an
associated issue tracking its implementation in the Rust repository; thus that
associated issue can be assigned a priority via the triage process that the
team uses for all issues in the Rust repository.

The author of an RFC is not obligated to implement it. Of course, the RFC
author (like any other developer) is welcome to post an implementation for
review after the RFC has been accepted.

If you are interested in working on the implementation for an "active" RFC, but
cannot determine if someone else is already working on it, feel free to ask
(e.g. by leaving a comment on the associated issue).


## RFC Postponement
[RFC Postponement]: #rfc-postponement

Some RFC pull requests are tagged with the "postponed" label when they are
closed (as part of the rejection process). An RFC closed with "postponed" is
marked as such because we want neither to think about evaluating the proposal
nor about implementing the described feature until some time in the future, and
we believe that we can afford to wait until then to do so.  Postponed pull
requests may be re-opened when the time is right. We don't have any formal
process for that, you should ask members of the relevant sub-team.

Usually, an RFC pull request marked as "postponed" has already passed an
informal first round of evaluation, namely the round of "do we think we would
ever possibly consider making this change, as outlined in the RFC pull request,
or some semi-obvious variation of it." (When the answer to the latter question
is "no", then the appropriate response is to close the RFC, not postpone it.)


### Help, This is All Too Informal!
[Help this is all too informal!]: #help-this-is-all-too-informal

The process is intended to be as lightweight as reasonable for the present
circumstances. As usual, we are trying to let the process be driven by
consensus and community norms, not impose more structure than necessary.


[Tremor chat]:
[Discord](https://discord.com/invite/Wjqu5H9rhQ)
 
[RFC repository]: http://github.com/tremor-rs/tremor-rfcs

## License
[License]: #license

This repository is currently licensed under:

* Apache License, Version 2.0, ([LICENSE](./LICENSE.txt) or http://www.apache.org/licenses/LICENSE-2.0)

### Contributions

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be licensed as above, without any additional terms or conditions.

### Origins
[Origins]: #origins

This process derives from, and is based on, the Rust language community RFC process [from here](https://github.com/rust-lang/rfcs).

## [RFC Template](0000-template/)

This is the template you should use when making an RFC.

## RFCs

#### -[0001-remove-actix-from-tremor-runtime](0001-remove-actix-from-tremor-runtime/)
#### -[0002-pipeline-state-mechanism](0002-pipeline-state-mechanism/)
#### -[0003-linked-transports](0003-linked-transports/)
#### -[0004-sliding-window-mechanism](0004-sliding-window-mechanism/)
#### -[0005-circuit-breaker-mechanism](0005-circuit-breaker-mechanism/)
#### -[0006-plugin-development-kit](0006-plugin-development-kit/)
#### -[0007-pipeline-optimizations](0007-pipeline-optimizations/)
#### -[0008-onramp-postgres](0008-onramp-postgres/)
#### -[0009-ramp-interface](0009-ramp-interface/)
#### -[0010-modularity](0010-modularity/)
#### -[0011-string-interpolation](0011-string-interpolation/)
#### -[0012-correlation](0012-correlation/)
