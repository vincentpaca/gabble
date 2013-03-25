gabble
======

Manage your tasks and log your time through Skype. Coming soon!

Starting Development
--------------------

1. Create your own `database.yml` file on `config/`. See `config/database.yml.example` for a reference.

2. Create a 30 character random string and assign it as `GABBLE_SECRET` it to to your `.bash_profile`. For example:

      export GABBLE_SECRET='f49cc1edd59cc2e1c0dc7a9c167e2ee7436f2ea9b7dd24b73e08a6951d06516d291b8fff1265c3dd0833dc863360b88fffeb169d2ce36f503814d93516941dae'

3. Run `bundle install`

4. Run `bundle exec rake db:create`

5. Run `bundle exec rake db:migrate`
