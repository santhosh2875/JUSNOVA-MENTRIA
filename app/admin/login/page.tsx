// app/admin/login/page.tsx (client component is fine)
<form action="/admin/login" method="post" className="space-y-4">
  <div>
    <Label htmlFor="id">Admin ID</Label>
    <Input id="id" name="id" required />
  </div>
  <div>
    <Label htmlFor="password">Password</Label>
    <Input id="password" name="password" type="password" required />
  </div>
  <Button type="submit">Sign in</Button>
</form>
