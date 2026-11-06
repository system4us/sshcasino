const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const withBase = (path: string) => `${BASE}${path.startsWith('/') ? path : '/' + path}`;

export interface Game {
  id: string;
  name: string;
  tagline: string;
  houseEdge: string;
  minBet: string;
  maxLoss: string;
  riskLevel: 'CRITICAL' | 'CATASTROPHIC' | 'EXTINCTION-LEVEL' | 'RESUME-GENERATING';
  badgeColor: string;
  icon: 'cards' | 'roulette' | 'poker' | 'dice' | 'revolver';
  shortDesc: string;
  fullDesc: string;
  rules: string[];
  payouts: { hand: string; result: string; odds: string }[];
  sampleTerminal: string[];
}

export const games: Game[] = [
  {
    id: 'ssh-blackjack',
    name: 'SSH Blackjack',
    tagline: 'Every hit is another unreviewed Friday afternoon deployment.',
    houseEdge: '99.94% (Root Always Wins)',
    minBet: '1x ~/.ssh/id_ed25519 (No Passphrase)',
    maxLoss: 'Full Lateral Movement Across Prod & Staging',
    riskLevel: 'CRITICAL',
    badgeColor: 'text-neon-green border-neon-green/50 bg-neon-green/10',
    icon: 'cards',
    shortDesc: 'Wager your raw private SSH keys against the dealer. Try to get as close to 21 open ports without triggering a kernel panic or compromising production.',
    fullDesc: 'In SSH Blackjack, you sit face-to-face with an automated Pit Boss daemon running as UID 0. Instead of plastic chips, you slide your unencrypted id_rsa and production bastion host jump keys across the green felt. Hit to open another port on 0.0.0.0/0; Stand to pray your firewall rules hold.',
    rules: [
      'Player must ante up at least one production SSH key with chmod 777 permissions.',
      'Each "Hit" executes an unverified curl | sudo bash script pulled from an expired domain.',
      'Drawing 21 grants temporary sudo NOPASSWD:ALL privileges for 15 seconds.',
      'Going over 21 ("Busting") automatically force-pushes your local temp branch to origin/main and revokes your VPN access.',
      'Dealer must hit on soft 17 and automatically splits any unpatched CVE-2024 vulnerabilities.'
    ],
    payouts: [
      { hand: 'Natural 21 (Zero-Day Blackjack)', result: 'Keep your job until Monday morning', odds: '3 : 2' },
      { hand: 'Dealer Bust (OOM Killer Triggered)', result: 'Free self-signed wildcard SSL certificate', odds: '1 : 1' },
      { hand: 'Split Root Keys', result: '2x Cryptominers installed in kube-system', odds: '10 : 1' },
      { hand: 'Player Bust (>21 Open Ports)', result: 'Immediate PagerDuty SEV-1 escalation at 3:14 AM', odds: 'Guaranteed' }
    ],
    sampleTerminal: [
      '$ ssh -i ~/.ssh/prod_master_key dealer@table04.sshcasino.gg',
      '[DEALER] Verifying key entropy... Key accepted (Root access confirmed).',
      '[TABLE] Your hand: Port 22 (10) + Port 3306 Exposed (8) = 18',
      '[ACTION] Player selects: HIT ME (--force --no-preserve-root)',
      '[CARD] Drawn: Port 6379 Redis Unauthenticated (+7) -> TOTAL: 25 [BUST!]',
      '[SYSTEM] Exporting production .env to public pastebin... Have a nice weekend!'
    ]
  },
  {
    id: 'aws-roulette',
    name: 'AWS Roulette',
    tagline: 'One spin away from a multi-region outage and a $480,000 surprise bill.',
    houseEdge: 'us-east-1 (Always Down)',
    minBet: 'AdministratorAccess IAM Role + No Billing Alerts',
    maxLoss: 'Infinite Auto-Scaling p5.48xlarge Loop',
    riskLevel: 'CATASTROPHIC',
    badgeColor: 'text-neon-gold border-neon-gold/50 bg-neon-gold/10',
    icon: 'roulette',
    shortDesc: 'Spin the 37-pocket Cloud Availability Zone wheel. Place your bets on Red (S3 Public Read/Write), Black (NAT Gateway Data Processing), or Green 00 (us-east-1 DNS Failure).',
    fullDesc: 'Why wait for a routine Terraform apply to wipe out your cloud infrastructure when you can spin the wheel in real time? AWS Roulette links directly to your root account credit card and spins across every global region. Where the ball lands, `terraform destroy -auto-approve` follows.',
    rules: [
      'Before the wheel spins, all AWS Budget Alerts and CloudWatch Billing Alarms are ceremonially disabled.',
      'Betting on "Red" deploys 64 serverless Lambdas that recursively invoke each other via S3 bucket events.',
      'Betting on "Black" routes 100TB of uncompressed video logs through a single Managed NAT Gateway across three Availability Zones.',
      'Landing on Green "0" or "00" (us-east-1 North Virginia) triggers an immediate global DNS propagation crisis affecting half the internet.',
      'No refunds if your CFO faints upon opening the monthly Cost Explorer CSV.'
    ],
    payouts: [
      { hand: 'Single Availability Zone (Straight Up)', result: '35x Reserved Instances in ap-south-2 you cannot cancel', odds: '35 : 1' },
      { hand: 'Red / Black (Public S3 Bucket)', result: 'Featured headline on HackerNews front page', odds: '1 : 1' },
      { hand: 'Dozen Bet (12 Microservices)', result: 'Egress fees exceed Series B funding round', odds: '2 : 1' },
      { hand: '00 (us-east-1 Total Blackout)', result: 'Status page remains all green while everything burns', odds: 'House Wins All' }
    ],
    sampleTerminal: [
      '$ aws roulette spin --profile prod-root --disable-safety-checks',
      '[WHEEL] Spinning across 33 regions and 105 Availability Zones...',
      '[BALL] Bouncing past eu-central-1... skipping us-west-2...',
      '[RESULT] Landed on: 00 GREEN — us-east-1 (Kinesis + IAM Control Plane)',
      '[BILLING] Current session egress charge: $142,890.42 (+ $810/sec)',
      '[STATUS] Dashboard icon updated to: "Informational: Minor API Degradation"'
    ]
  },
  {
    id: 'database-poker',
    name: 'Database Poker (No-Limit SQL Hold\'em)',
    tagline: 'All-in with your unbacked-up production credentials and zero WHERE clauses.',
    houseEdge: 'DROP CASCADE',
    minBet: '10M Unencrypted Customer PII Rows',
    maxLoss: 'TRUNCATE TABLE users CASCADE; (No Snapshots)',
    riskLevel: 'EXTINCTION-LEVEL',
    badgeColor: 'text-neon-red border-neon-red/50 bg-neon-red/10',
    icon: 'poker',
    shortDesc: 'Texas Hold\'em for DBA thrill-seekers. Bluff the query planner, raise the connection pool limit, and go all-in on an unindexed 12-table JOIN in production.',
    fullDesc: 'Look the other DBAs in the eye and push your entire primary PostgreSQL cluster into the pot. Do you actually have a verified point-in-time recovery backup, or are you bluffing with a 4-year-old mysqldump file that is 0 bytes long? Only the River card (and an accidental missing WHERE clause) will tell.',
    rules: [
      'All hands are played inside an uncommitted `BEGIN TRANSACTION` block with `SERIALIZABLE` isolation locked on the `orders` table.',
      'To "Call", you must drop one foreign key constraint at random.',
      'To "Raise", you must execute an `ALTER TABLE` column type migration on a 4TB table during Black Friday peak traffic.',
      'Going "All-In" disables WAL archiving and deletes the last 30 days of automated RDS snapshots.',
      'If two players tie, both databases are merged using a full Cartesian `CROSS JOIN` until disk space reaches 100%.'
    ],
    payouts: [
      { hand: 'Royal Flush (Valid Tested Backup)', result: 'Mythical hand — has never occurred in production history', odds: '649,739 : 1' },
      { hand: 'Full House (Deadlock on Primary & Replica)', result: '500 Internal Server Error across all checkout endpoints', odds: '14 : 1' },
      { hand: 'Four of a Kind (UPDATE without WHERE)', result: 'Every user in the database is now named "Bob Test"', odds: '4,164 : 1' },
      { hand: 'High Card (0-Byte Backup.sql.gz)', result: 'Update LinkedIn headline to "Open to New Opportunities"', odds: '1 : 1' }
    ],
    sampleTerminal: [
      'postgres=# BEGIN; -- Table Stakes: 48,291,004 customer records',
      '[FLOP]  Cards dealt: [MISSING INDEX] [N+1 ORM QUERY] [LOCK TIMEOUT]',
      '[TURN]  Opponent raises: ALTER TABLE payments DROP COLUMN stripe_id;',
      '[RIVER] You go ALL-IN: DELETE FROM production.users;',
      'DELETE 48291004',
      'postgres=# COMMIT; -- Wait, I thought this was staging...'
    ]
  },
  {
    id: 'kubernetes-craps',
    name: 'Kubernetes Craps',
    tagline: 'Roll the dice on YAML indentation. May the pods be with you.',
    houseEdge: 'CrashLoopBackOff',
    minBet: '3x Control Plane etcd Nodes',
    maxLoss: 'helm uninstall --all -n kube-system',
    riskLevel: 'CATASTROPHIC',
    badgeColor: 'text-neon-cyan border-neon-cyan/50 bg-neon-cyan/10',
    icon: 'dice',
    shortDesc: 'Step up to the distributed container craps table. Roll a 7 or 11 to schedule your pods, or snake eyes to corrupt etcd quorum and evict every node.',
    fullDesc: 'Nobody truly understands Kubernetes networking anyway, so we turned CNI plugin upgrades and Helm chart deployments into a high-speed dice game! Blow on your YAML manifests for good luck and hurl the dice across the service mesh.',
    rules: [
      'The "Shooter" must write a 400-line Kubernetes Deployment YAML in vim without syntax highlighting or linter plugins.',
      'Rolling a 7 or 11 on the Come-Out roll schedules 500 pods with `resources: {}` (no CPU or memory limits).',
      'Rolling 2, 3, or 12 ("Craps") instantly puts `coredns`, `kube-proxy`, and `istio-ingressgateway` into permanent `ImagePullBackOff`.',
      'If the dice hit an odd whitespace indentation on line 142, the entire `production` namespace is cordoned and drained.',
      'Side bets available on whether `etcd` survives a split-brain network partition.'
    ],
    payouts: [
      { hand: 'Hard Eight (8 Microservices Communicating)', result: 'Only 400ms of mTLS sidecar latency added per hop', odds: '9 : 1' },
      { hand: 'Snake Eyes (1-1: etcd Quorum Lost)', result: 'Complete cluster amnesia; YAML files belong to the void now', odds: '30 : 1' },
      { hand: 'Seven Out (OOMKilled Across All Nodes)', result: 'Kubernetes schedules a pod to evict the Kubernetes scheduler', odds: '4 : 1' },
      { hand: 'Pass Line Win (All Pods 1/1 Running)', result: 'Illusion! Liveness probe was just checking `exit 0`', odds: '1 : 1' }
    ],
    sampleTerminal: [
      '$ kubectl roll-dice -n production --replicas=666',
      '[SHOOTER] Rolling dice... [ 1 ] + [ 1 ] = SNAKE EYES!',
      'namespace "production" deleted',
      'persistentvolume "prod-postgres-pv-01" Status: Released (ReclaimPolicy: Delete)',
      '$ kubectl get pods -A',
      'No resources found in any namespace. Have you tried Docker Swarm?'
    ]
  },
  {
    id: 'devops-russian-roulette',
    name: 'Russian Roulette — DevOps Edition',
    tagline: 'Six CI/CD pipeline chambers. Five empty mocks. One live `rm -rf /`.',
    houseEdge: '16.67% Per Pull Request',
    minBet: 'Direct Push to `main` (No Branch Protection)',
    maxLoss: 'Complete Infrastructure & Backups Obliteration',
    riskLevel: 'RESUME-GENERATING',
    badgeColor: 'text-neon-red border-neon-red bg-neon-red/20',
    icon: 'revolver',
    shortDesc: 'Six deployment scripts loaded into a revolving cron job. Five echo "Hello World". One executes a recursive wipe across every mounted volume and S3 backup.',
    fullDesc: 'The ultimate VIP high-roller room at sshCasino. No unit tests, no staging environment, no code review, and no rollback plan. Five chambers contain a harmless CSS padding fix; the sixth chamber contains an obfuscated bash one-liner that nukes production, staging, and your DR site simultaneously.',
    rules: [
      'Branch protection rules, required approvals, and CI status checks must be bypassed using `--admin` privileges.',
      'Each pull of the trigger executes `git push --force origin main` at 4:58 PM on a Friday before a 3-day holiday weekend.',
      'Five chambers return `200 OK` and award you 10,000 Enterprise DevOps Credibility Chips.',
      'The sixth chamber overwrites every block device with `/dev/urandom` and posts your browser history to the #general Slack channel.',
      'Passing the revolver to the Junior Intern on their first day counts as a valid strategic move.'
    ],
    payouts: [
      { hand: 'Click (Chamber 1-5: CSS Fix Deployed)', result: 'Adrenaline rush stronger than 8 espressos', odds: '1.2 : 1' },
      { hand: '3 Consecutive Clicks (Triple Bypass)', result: 'Promoted to "10x Cowboy Principal Architect"', odds: '5 : 1' },
      { hand: '5 Consecutive Clicks (Immortal Sysadmin)', result: 'Golden Mechanical Keyboard + Lifetime Pager Immunity', odds: '32 : 1' },
      { hand: 'BANG! (Chamber 6: Total Annihilation)', result: 'Company pivots to artisanal woodworking by Monday', odds: '1 in 6' }
    ],
    sampleTerminal: [
      '$ sudo ./revolver.sh --target=prod-cluster-01 --chamber=random',
      '[REVOLVER] Spinning cylinder... *clack-clack-clack-clack*',
      '[CHAMBER #4] Pulling trigger on 142 production nodes...',
      '[EXEC] Running payload: dd if=/dev/zero of=/dev/nvme0n1 bs=1M status=progress',
      '[ALERT] Connection to 10.0.0.1 closed by remote host.',
      '[ALERT] PagerDuty: 842 active incidents triggered. Good luck!'
    ]
  }
];

export interface HallOfFameEntry {
  rank: number;
  handle: string;
  role: string;
  avatarUrl?: string;
  outcomeType: 'JACKPOT WINNER' | 'BEAT THE HOUSE' | 'BREAK-EVEN MIRACLE' | 'TOTAL LIQUIDATION';
  game: string;
  wager: string;
  loss: string;
  netResult: string;
  incidentCode: string;
  status: string;
}

export const hallOfFame: HallOfFameEntry[] = [
  {
    rank: 1,
    handle: 'E-lon (technoking@x-prod)',
    role: 'Undefeated Casino Whale & Server Unplugger',
    avatarUrl: `${BASE}/avatars/elon-musk.jpg`,
    outcomeType: 'JACKPOT WINNER',
    game: 'DevOps Russian Roulette',
    wager: '80% of Production Microservices + Sacramento Data Center',
    loss: 'PULLED THE TRIGGER 5 TIMES & WON! Ripped out 3,400 servers with wire cutters, saved $120M/yr in cloud bills, and the app somehow ran 40% faster.',
    netResult: '+$120,000,000 / yr & 3,400 Free Server Racks',
    incidentCode: 'WIN-42069-JACKPOT',
    status: 'BANKRUPTED THE HOUSE'
  },
  {
    rank: 2,
    handle: 'linus_git_force',
    role: 'Benevolent Kernel Dictator',
    avatarUrl: `${BASE}/avatars/linus-torvalds.jpg`,
    outcomeType: 'BEAT THE HOUSE',
    game: 'SSH Blackjack',
    wager: 'Linux Kernel Master Branch + 1991 PGP Key',
    loss: 'Dealt Natural 21 on a live kernel patch; intimidated the Dealer daemon into segfaulting and forfeiting root access.',
    netResult: '+10,000 Root Keys & Permanent Sudo',
    incidentCode: 'WIN-00001-KERNEL',
    status: 'CASHED OUT IN C'
  },
  {
    rank: 3,
    handle: 'database_admin',
    role: 'Principal DBA (20 Yrs Exp)',
    outcomeType: 'BREAK-EVEN MIRACLE',
    game: 'Database Poker',
    wager: 'Primary PostgreSQL Cluster + All Read Replicas',
    loss: 'Lost all 18 production databases on a river bluff, but convinced the board it was a "scheduled GDPR compliance purge" and got a performance bonus.',
    netResult: '+$45,000 Bonus & 0 Rows to Maintain',
    incidentCode: 'INC-65004-BLUFF',
    status: 'Promoted to VP of Data'
  },
  {
    rank: 4,
    handle: 'root@production',
    role: 'Former Staff SRE',
    outcomeType: 'TOTAL LIQUIDATION',
    game: 'SSH Blackjack',
    wager: 'Master Bastion SSH Key + Ansible Vault Password',
    loss: 'Hit on Hard 20; lost 47 bare-metal servers & 3 petabytes of Ceph storage in one night.',
    netResult: '-47 Bare-Metal Servers',
    incidentCode: 'INC-99412-FATAL',
    status: 'Living off-grid in Patagonia'
  },
  {
    rank: 5,
    handle: 'anonymous_dev',
    role: 'Full-Stack Vibe Coder',
    outcomeType: 'TOTAL LIQUIDATION',
    game: 'AWS Roulette',
    wager: 'Root AWS Account API Keys hardcoded in React frontend',
    loss: 'Landed on 00 Green (us-east-1); spun up 900 p5.48xlarge GPUs for a $1.4M bill in 22 minutes.',
    netResult: '-$1,420,000 Cloud Bill',
    incidentCode: 'INC-88201-BILLING',
    status: 'On hold with AWS Support'
  },
  {
    rank: 6,
    handle: 'kubernetes_master',
    role: 'Cloud Native Evangelist',
    outcomeType: 'TOTAL LIQUIDATION',
    game: 'Kubernetes Craps',
    wager: 'Production kubeconfig with cluster-admin binding',
    loss: 'Rolled Snake Eyes (1-1); deleted `production` and `kube-system` namespaces while chasing a Hard 8.',
    netResult: '-140 Microservices',
    incidentCode: 'INC-77109-YAML',
    status: 'Writing a 14-part Medium series'
  }
];

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  lost: string;
  isWinner?: boolean;
  avatar: 'server' | 'bolt' | 'terminal' | 'shield' | 'skull' | 'user';
  imageUrl?: string;
  verifiedTag?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Every time an engineer spins the AWS Roulette wheel at sshCasino, either they win free compute credits or their NAT Gateway bill pays for another thruster on my superyacht. Everybody wins!",
    author: "Jeff Bezos",
    company: "Executive Chair & High-Roller VIP Host",
    lost: "+$480,000 / spin Yacht Fund",
    isWinner: true,
    avatar: "server",
    imageUrl: `${BASE}/avatars/jeff-bezos.jpg`,
    verifiedTag: "UNDEFEATED HOUSE PARTNER"
  },
  {
    quote: "Everyone told me unplugging 80% of our production servers during a game of DevOps Russian Roulette would crash the platform. Instead, I hit the Mega Jackpot, saved $120M in cloud costs, and beat the House!",
    author: "E-lon",
    company: "#1 Leaderboard Champion • Chief Hardcore Winner",
    lost: "WON +$120M SAVED & 5/5 CLICKS",
    isWinner: true,
    avatar: "bolt",
    imageUrl: `${BASE}/avatars/elon-musk.jpg`,
    verifiedTag: "#1 MEGA JACKPOT WINNER"
  },
  {
    quote: "I stared down the SSH Blackjack dealer, doubled down on a live kernel patch without unit tests, and walked away with the casino's entire root key vault. Best odds in town if you know how to code.",
    author: "Linus T.",
    company: "Kernel High-Roller & Git Force-Push Champion",
    lost: "WON +10,000 ROOT KEYS",
    isWinner: true,
    avatar: "terminal",
    imageUrl: `${BASE}/avatars/linus-torvalds.jpg`,
    verifiedTag: "BLACKJACK GRANDMASTER"
  },
  {
    quote: "I bet our entire BGP routing table on Database Poker just to see what would happen. Turns out we locked ourselves out of the data center badge readers for six hours. 10/10 adrenaline.",
    author: "Mark Z.",
    company: "BGP Roulette Enthusiast & Metaverse Architect",
    lost: "-1 Global AS Routing Table",
    isWinner: false,
    avatar: "server",
    imageUrl: `${BASE}/avatars/mark-zuckerberg.jpg`,
    verifiedTag: "BGP HIGH ROLLER"
  },
  {
    quote: "I came here with three production servers. I left with a very interesting postmortem—and somehow won a free Mechanical Keyboard on Kubernetes Craps!",
    author: "Anonymous DevOps Engineer",
    company: "Series B Fintech",
    lost: "Won Keyboard / Lost 3 Clusters",
    isWinner: true,
    avatar: "terminal",
    verifiedTag: "MIXED ODDS SURVIVOR"
  },
  {
    quote: "I used to manage 47 servers. Now I manage my LinkedIn profile. Worth every spin.",
    author: "Senior Infrastructure Engineer",
    company: "#OpenToWork since Tuesday",
    lost: "-47 Bare-Metal Nodes",
    isWinner: false,
    avatar: "skull",
    verifiedTag: "WALL OF SHAME LEGEND"
  }
];
