var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.TestApp_Server>("testapp-server");

await builder.Build().RunAsync();
